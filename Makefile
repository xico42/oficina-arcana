.PHONY: server
server:
	hugo server -b http://localhost:1313/ -p 1313  --disableFastRender

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

.PHONY: amuleto-beast
amuleto-beast:
	hugo new content --kind amuleto-beast content/post/amuleto-montanha-mutilada/criaturas/$(name)/index.md

.PHONY: magia-mago
magia-mago:
	hugo new content --kind magia-mago content/post/tomo-metafisico/mago/$(name)/index.md


.PHONY: funnel-beast
funnel-beast:
	hugo new content --kind funnel-beast content/post/devorador-de-destinos/criaturas/$(name)/index.md