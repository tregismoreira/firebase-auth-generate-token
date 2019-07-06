run:
	docker build -t firebase-auth-generate-token -f ./Dockerfile .
	docker run -it firebase-auth-generate-token npm run start