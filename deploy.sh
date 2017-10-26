#!/bin/bash
aws s3 cp --recursive dist/ s3://search.miro.io/travel/
aws cloudfront create-invalidation --distribution-id E3494MQB8BK75B --paths /travel/
