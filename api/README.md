nodes-restful-api
RESTful API with NodeJS and express restify mongoose
=================
1.npm install
2.修改 node_modules\mongoose\node_modules\mongodb\node_modules\bson\ext\index文件：
	../build/release/bson ==> '../browser_build/bson'
3.dist 目录下创建：
logs 文件夹以及log_file.log文件
4.修改src\config\fonfig.js文件：
5.运行gulp

======================================================

关于express-restify-mongoose 请参考
https://github.com/florianholzapfel/express-restify-mongoose