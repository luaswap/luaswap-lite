#!/bin/bash

expo build:web
web_build_return_code="$?"

echo "lite.luaswap.com" > web-build/CNAME

exit "${web_build_return_code}"
