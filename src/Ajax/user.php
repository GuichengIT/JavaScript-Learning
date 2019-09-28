<?php

/*
* 返回的响应的就是一个 json 内容
*/
header('Content-Type: application/json');


// user.php?id=1 ==>id为1的用户信息

$data = array(
    array(
        'id' => 1,
        'name' => 'zhangsan',
        'age' => 18
    ),
    array(
            'id' => 2,
            'name' => 'lisi',
            'age' => 19
        ),
    array(
            'id' => 3,
            'name' => 'ershazi',
            'age' => 20
        ),
    array(
            'id' => 4,
            'name' => 'sanlengzi',
            'age' => 21
        )
);

if (empty($_GET['id'])){
 //没有id获取全部
 //因为http协议中约定报文的内容就是字符串，而我们需要传递给客户端的信息是一个有结构的数据
 //这种情况下我们采用JSON作为数据格式
 $json = json_encode($data); // => [{"id": 1, "name": },{}]
 echo $json;
} else {
//传递了ID只获取指定的id的哪一条信息
    foreach ($data as $item) {
        if ($item['id'] != $_GET['id']) continue;
        $json = json_encode($item); // => [{"id": 1, "name": },{}]
        echo $json;
    }
}