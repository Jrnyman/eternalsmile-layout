#! /usr/bin/bash

echo "es-builder"

set -euf -o pipefail

render() {
	title="web page"
	echo "$(eval "cat <<EOF
		$(<${1/.meta/.html})
EOF")"
}

render $@
