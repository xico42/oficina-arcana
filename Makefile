.PHONY: server
server:
	hugo server -b http://localhost:1313/oficina-arcana -p 1313

.PHONY: ose-beast
ose-beast:
	hugo new content --kind ose-beast content/post/comunidade/criaturas/$(name)/index.md

.PHONY: arcana-beast
arcana-beast:
	hugo new content --kind arcana-beast content/post/guia-do-aventureiro/criaturas/$(name)/index.md

.PHONY: caves-beast
caves-beast:
	hugo new content --kind caves-and-hexes-beast content/post/comunidade/criaturas/$(name)/index.md

.PHONY: bf-beast
bf-beast:
	hugo new content --kind basic-fantasy-beast content/post/comunidade/criaturas/$(name)/index.md
