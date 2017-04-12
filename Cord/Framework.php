<?php
namespace Cord;

class Framework
{
    public $arr;

    public function findPage($page,$num,$url)
    {
        $prev = ($page - 1 < 1) ? 'javascript:void(0)' : ($url.'?page=' . ($page - 1));

        //上一页
        $html = '<nav aria-label="Page navigation"><ul class="pagination"><li><a href="' . $prev . '" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';

        //每一页
        for ($i = 1; $i <= $num; $i++) {
            if($i == $page){
                $html .= "<li class='active'><a href='{$url}?page={$i}'>{$i}</a></li>";
            }else{
                $html .= "<li><a href='{$url}?page={$i}'>{$i}</a></li>";
            }
        }

        //下一页
        $next = ($page + 1 > $num) ? 'javascript:void(0)' : ('/php-music/admin?page=' . ($page + 1));
        $html .= '<li> <a href="' . $next . '" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul></nav>';
        return $html;
    }

    public function redirect($url)
    {
        header("Location:$url");
    }

    public function assign($k, $v)
    {
        $this->arr[$k] = $v;
    }

    public function display($file)
    {
        $file = VIEW . $file;
        if (file_exists($file)) {
            if (!empty($this->arr)) {
                extract($this->arr);
            }
            include $file;
        } else {
            include VIEW . '404.html';
        }
    }

    public function session($k, $v)
    {
        session_start();
        $_SESSION[$k] = $v;
    }

    public function json($value)
    {
        header('Content-Type:text/json');
        echo json_encode($value);
    }

    public static function start()
    {
        $arr = explode('/', explode('?', $_SERVER["REQUEST_URI"])[0]);
//        c($arr);
        if (empty($arr[2])) {
            $c = 'indexController';
        } else {
            $c = $arr[2] . "Controller";
        }
        $m = isset($arr[3]) ? $arr[3] : 'index';

        $classFile = CONTROLLER . $c . '.php';
        if (file_exists($classFile)) {
            require $classFile;
            $t = '\\app\\controller\\' . $c;
            if (class_exists($t) && method_exists($t, $m)) {
                $page = new $t();
                $page->$m();
            } else {
                include VIEW . '404.html';
            }
        } else {
            include VIEW . '404.html';
        }
    }
}