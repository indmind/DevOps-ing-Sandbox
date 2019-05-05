default:
	@echo "'make compose' bro"

compose:
	docker-compose -f docker-compose.builder.yml run --rm install
