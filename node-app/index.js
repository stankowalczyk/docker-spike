import express from 'express';
import Promise from 'bluebird';
import redis   from 'redis';

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

let redisClient = redis.createClient();

let app = express();

app.get('/', (req, res) => {
  return redisClient.getAsync('hit-count')
  .then(result => {
    if (!result) result = 0;
    result = parseInt(result, 10);
    res.status(200).send(`This page has been visited ${result} times.`);
    return redisClient.setAsync('hit-count', result + 1);
  });
});

app.listen(8080);
console.log(`Server listening on port: 8080`);
