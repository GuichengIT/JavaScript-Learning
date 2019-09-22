<?php

// user.php?id=1 ==>id为1的用户信息

$data = array(
    array(
        'id' => 1,
        'name' => 'zhangsan'
    ),
    array(
            'id' => 2,
            'name' => 'lisi'
        ),
    array(
            'id' => 3,
            'name' => 'ershazi'
        ),
    array(
            'id' => 4,
            'name' => 'sanlengzi'
        )
)

if ( empty($_GET['id'])){
 //没有id获取全部
 //因为http协议中约定报文的内容就是字符串，而我们需要传递给客户端的信息是一个有结构的数据
 //这种情况下我们采用JSON作为数据格式
 $json = json_encode($data); // => [{"id": 1, "name": },{}]
 echo $json;
} else {
//传递了ID只获取指定的id的哪一条信息
}