.PHONY: server
server:
	hugo server -b http://localhost:1313/pergaminhos-secretos

ose-beast:
	hugo new content --kind ose-beast content/beast/unofficial/$(name)/index.md

