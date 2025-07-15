.PHONY: server
server:
	hugo server -b http://localhost:1313/oficina-arcana

ose-beast:
	hugo new content --kind ose-beast content/beast/unofficial/$(name)/index.md

arcana-beast:
	hugo new content --kind arcana-beast content/beast/official/$(name)/index.md

