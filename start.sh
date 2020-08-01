docker run \
	-p 3000:3000 \
	--rm -it \
	-v $(pwd):/app \
	secondstate/ssvm-nodejs-starter:v1
