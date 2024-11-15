const express = require('express');
const app = express();

app.get('/board/:id/:pw/:name', (req, res) => {
    // ● 라우팅 (:id)
    // http://localhost:9999/board/30 → {"boardID":"30"}

    // ● 중첩 라우팅 (:id/:pw/:name)
    //   http://localhost:9999/board/thgus/1234/%EA%B6%8C%EC%86%8C%ED%98%84 → {"boardID":"thgus","pw":"1234","name":"권소현"}
    const { id, pw, name } = req.params;
    res.status(200).send({
        boardID: id,
        pw, name
    });
});

app.listen(9999);