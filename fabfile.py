# -*- coding: utf-8 -*-

import os
import json

from fabric.api import local

frontend_url = os.environ.get("FRONTEND_URL", "earth.healworld.co.kr")

sync_conf = {
    "bundle_path": "dist",
    "bucket_name": frontend_url,
    "user_profile": "pointer",
    "region": "ap-northeast-2"}


def check():
    aws_conf_files = local("ls ~/.aws", capture=True)
    for ele in ['config', 'credentials']:
        if ele in aws_conf_files:
            continue
        else:
            print("No %s in ~/.aws" % ele)


def run_build():
    local("ng build --prod --aot")


def _increment_ref():
    """
    명령어 aws cloudfront create-invalidation 는 인자로 받는 파일 'invbatch.json'의 CallerReference값을 참고한다.
    그 값이 이전 요청에서 사용된 경우는 invalidation 되지 않으므로, 항상 새로운 값을 가져야 한다.
    """
    with open('invbatch.json', 'r') as fp:
        invalid = fp.read()
        invalid_json = json.loads(invalid)
        invalid_json['CallerReference'] = str(int(invalid_json['CallerReference']) + 1)

    with open('invbatch.json', 'w') as fp:
        json.dump(invalid_json, fp)


def run_invalidate():
    _increment_ref()

    local("aws cloudfront create-invalidation"
          " --invalidation-batch file://invbatch.json"
          " --distribution-id E1S2MCGWY8L37M"
          " --profile {user_profile}"
          " --region {region}".format(**sync_conf))
    print("## Deployment is done successfully, open your browser and see http://%s" % frontend_url)


def deploy(build=True, invalidate=True):
    import ipdb; ipdb.set_trace()
    check()

    if build:
        run_build()

    local("aws s3 sync {bundle_path} s3://{bucket_name}/"
          " --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers "
          " --profile {user_profile}"
          " --region {region}".format(**sync_conf))
    print("## Deployment is done successfully, open your browser and see https://%s" % frontend_url)

    if invalidate:
        run_invalidate()

