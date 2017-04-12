<?php
namespace core;
use PDO;
use PDOException;
class dbpdo{
    public $pdo;
    public function __construct(){
        $options = array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        );
        $db = array(
            'dsn' => 'mysql:host=localhost;dbname=audio;port=3306;charset=utf8',
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8'
        );
        try{
            $this->pdo = new PDO($db['dsn'], $db['username'], $db['password'],$options);
        }catch(PDOException $e){
            die('连接失败:' . $e->getMessage());
        };
    }
    public function fetchAll($sql){
        $con=$this->pdo->prepare($sql);
        $con->execute();
        return $con->fetchAll();
    }
    public function insert($table,$datas){
        $sql = "insert into {$table} (";
            foreach($datas as $k => $v){
            $sql.=$k . ",";
            };
            $sql = substr($sql, 0,-1);
            $sql .=") values (";
            foreach($datas as $k => $v){
                $sql.="?,";
            }
            $sql =substr($sql , 0 ,-1);
            $sql.=")";
        $con=$this->pdo->prepare($sql);
        for($i=1; $i<= count($datas); $i++){
            $con->bindvalue($i, array_values($datas)[$i - 1]);
        }
        try{
            $con->execute();
        }catch(PDOException $e){
            die('sql语句执行失败:' . $e->getMessage());
        };
    }
    public function delete($table,$where){
        $sql="delete from {$table} where ";
        foreach($where as $k=>$v){
            $sql.=$k.'='.$v;
        }
        $con=$this->pdo->prepare($sql);
        try{
            $con->execute();
            return true;
        }catch(PDOException $e){
            die('sql语句执行失败'.$e->getMessage());
        }
    }
    public function update($table,$where,$data){
        $sql='update ' .$table .' set ';
        foreach($data as $k=>$v){
            $sql .= $k. '= ? ,';
        };
        $sql=substr($sql,0,-1);
        $sql.=' where ';
        foreach($where as $k=>$v){
            $sql .= $k . '=?';
        }
        c($sql);
        $con= $this->pdo->prepare($sql);
        for($i=1;$i<=count($data);$i++){
            $con->bindValue($i,array_values($data)[$i-1]);
        }
        $con->bindValue($i,array_values($where)[0]);
        try{
            return $con->execute();
        }catch(PDOException $e){
            die('数据库连接失败:' . $e->getMessage());
        };
    }
    public function fetch($sql){
        $con=$this->pdo->prepare($sql);
        try{
            $con->execute();
            return $con->fetch();

        }catch(PDOException $e){
            die('数据库连接失败:' . $e->getMessage());
        };

    }
}