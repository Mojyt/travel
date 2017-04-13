<?php
namespace App\controller;

use cord\Framework;


class indexController extends Framework
{
    //闪屏
    public function splash()
    {
        $this->display('default/lxj/index1.html');
    }

    //首页
    public function index()
    {
        $this->display('default/yd/index.html');
    }

    //登录
    public function login()
    {
        $this->display('default/liu/index.html');
    }
    public function login_1()
    {
        $this->display('default/liu/login.html');
    }
    public function login_2()
    {
        $this->display('default/liu/qqlogin.html');
    }
    //注册
    public function register()
    {
        $this->display('default/zr/login1.html');
    }
    //注册页面...
    public function enroll(){
        $this->display('default/zr/login2.html');
    }
    public function userpass(){
        $this->display('default/zr/login3.html');
    }

    //搜索
    public function search()
    {
        $this->display('default/GE/search.html');
    }

    public function select()
    {
        $this->display('default/GE/select.html');
    }

    public function stsearch()
    {
        $this->display('default/GE/stsearch.html');
    }

    public function searching()
    {
        $this->display('default/GE/searching.html');
    }

    public function searchout()
    {
        $this->display('default/GE/searchout.html');
    }

    public function searchguide()
    {
        $this->display('default/GE/searchguide.html');
    }

    public function voice_begin()
    {
        $this->display('default/yd/voice-begin.html');
    }

    public function voice_fail()
    {
        $this->display('default/yd/voice-fail.html');
    }

    public function voice_last()
    {
        $this->display('default/yd/voice-last.html');
    }
    //私人订制
    public function tailor()
    {
        $this->display('default/process/overview.html');
    }

    public function order_route()
    {
        $this->display('default/trip/setting_up.html');
    }

    public function adjust_route()
    {
        $this->display('default/trip/adjust.html');
    }

    public function exclusive()
    {
        $this->display('default/trip/exclusive.html');
    }
    public function show(){
        $this->display('default/process/require.html');
    }
    public function method(){
        $this->display('default/process/method.html');
    }

    public function my_trip()
    {
        $this->display('default/trip/my_trip.html');
    }

    //个人中心
    public
    function personal()
    {
        $this->display('default/wzj_personal/personal.html');
    }

    public
    function follow()
    {
        $this->display('default/wzj_personal/follow.html');
    }

    public
    function follow_detail()
    {
        $this->display('default/wzj_personal/follow_detail.html');
    }

    public function tell()
    {
        $this->display('default/wzj_personal/tell.html');
    }

//旅游圈
    public
    function travel()
    {
        $this->display('');

    }


    //支付
    public function payment()
    {
        $this->display('default/bx/payment.html');
    }

    public function confirm_add()
    {
        $this->display('default/bx/confirm-add.html');
    }

    public function choose_card()
    {
        $this->display('default/bx/choose-card.html');
    }

    public function add_card()
    {
        $this->display('default/bx/add-card.html');
    }

    /*public function userpass()
    {
        $this->display('default/bx/password.html');
    }*/

    public function success()
    {
        $this->display('default/bx/success.html');
    }

}

