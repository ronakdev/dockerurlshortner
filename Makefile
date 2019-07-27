docker:
	@docker-compose down
	docker-compose build
	docker-compose up --force-recreate
clean:
	docker-compose down