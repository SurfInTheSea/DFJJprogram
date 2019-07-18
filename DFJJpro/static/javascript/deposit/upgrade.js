
/**
 * 校验用户银行存管账户 ，并弹窗升级窗口
 *
 * @author xsgao
 * @date 2018/1/22 上午 10:55
 * @param
 * @return
 */
// 校验是否点击同意按钮
var isChecked = 'F';
var hrefUrl = ''
//校验用户是否需要升级银行存管账户
function checkUpgrade(urlAll) {
    var flag = true;
    $.ajax({
        type: "post",
        url: "/weixin/v370/depositAccountStatus.html",
        data:{"channel":"M"},
        dataType: "json",
        async: false,
        contentType : "application/x-www-form-urlencoded; charset=utf-8",
        success: function (o) {
            var successCode = o.code;
            var data = o.data;

            if(successCode != "000000") {
                showAlert("",o.message);
                return;
            }
            if (data != null && "0" == data.accountStatus || "3" == data.accountStatus) {
                // $('.coverBox').show()
                if(successCode == "000000" &&  "0" == data.accountStatus){
                    hrefUrl = "/weixin/user/deposit/skipDeposit.html?urlAll=" + urlAll;
                }else if(successCode == "000000" && "3" == data.accountStatus){
                    hrefUrl="/weixin/user/Auth.html?urlAll=" + urlAll;
                }
                flag = false;
                return;
            }else if(successCode == "000000" && null != data && "2" == data.accountStatus){
                showUpdateInformation(o.data.agreementModel[0].agreementURL);
                flag = false;
                return flag;
            }else if("1" == data.accountStatus){
                var openOtherChannels = data.openOtherChannels;
                if(null != openOtherChannels && "T" == openOtherChannels){
                    showAlertAlreadyOpened("", '您已在其它渠道开通存管账户');
                    flag = false;
                    return flag;
                }
            }
        },
        error: function (xhr, type) {
            showAlert("", '服务器异常,请联系客服!')
        }
    });
    $('#noBox').click(function(){
        $('.coverBox').hide()
    })
    $('#yesBox').click(function(){
        window.location.href = hrefUrl
    })
    return flag
}


function openAccountAfterRealName(urlAll) {
    var flag = true;
    $.ajax({
        type: "post",
        url: "/weixin/v370/depositAccountStatus.html",
        data:{"channel":"M"},
        dataType: "json",
        async: false,
        contentType : "application/x-www-form-urlencoded; charset=utf-8",
        success: function (o) {
            var successCode = o.code;
            var data = o.data;

            if(successCode != "000000") {
                showAlert("",o.message);
                return;
            }
            if (data != null && "0" == data.accountStatus || "3" == data.accountStatus) {
                // $('.pop-view').show();
                // var pop = setTimeout(function () {
                //     $('.pop-view').hide();
                //     clearTimeout(pop);
                //     window.location.href="/weixin/user/deposit/skipDeposit.html";
                // }, 1500)
                    if(successCode == "000000" && "3" == data.accountStatus){
                        window.location.href="/weixin/user/Auth.html?urlAll=" + urlAll;
                        return;
                    }else if (successCode == "000000" && "0" == data.accountStatus) {
                        window.location.href = "/weixin/user/deposit/skipDeposit.html?urlAll=" + urlAll;
                    }
                flag = false;
                return flag;
            }else if(successCode == "000000" && null != data && "2" == data.accountStatus){
                showUpdateInformation(o.data.agreementModel[0].agreementURL);
                flag = false;
                return flag;
            }else if("1" == data.accountStatus){
                var openOtherChannels = data.openOtherChannels;
                if(null != openOtherChannels && "T" == openOtherChannels){
                    showAlertAlreadyOpened("", '您已在其它渠道开通存管账户');
                    flag = false;
                    return flag;
                }
                window.location.href=urlAll;
            }
        },
        error: function (xhr, type) {
            showAlert("", '服务器异常,请联系客服!')
        }
    });
    return flag
}

//账户升级弹窗
var depositpop;
function showUpdateInformation(agreementLinks) {

     depositpop = layer.open({
         type: 1,
         content: '<div class="lay-content depository-main">' +
        '<div class="m-tit">' +
        '<h2>银行存管全面升级</h2>' +
        '</div>' +
     '<span  class="top-img">' +
        '<img src="/images/deposit/depository-lay-bj.png" alt=""/>' +
         '</span>' +
        '<p class="lay-desc">' +
         '<span>您的存管账户初始密码为证件号后6位</span>' +
        '（字母用0代替），为了保障您的资金安全，建议您前去修改' +
         '</p>' +
         '<div class="n-agreement1" style="text-align: center">' +
         '<img class="n-agreement1" onclick="agreement();" src="/images/deposit/result-off.png"/>本人已同意' +
        '<span onclick="agreementLink(\''+ agreementLinks +'\')">《授权协议书》</span>' +'</div>' +
        '<div class="btn_box clearfix">' +
        '<button class="n-btn btn_bg" onclick="unUpdate()(\''+agreementLinks+'\')">暂不修改</button>' +
        '<button class="n-btn btn_bg" onclick="toDepositUp()">去修改</button>' +
        '</div>' +
        '</div>'
       , anim: 'scale'
         , style: 'width: 80%; height: auto; padding:10px 0;border-radius:0.2rem; border:none;'
     });
}

var depositpop2;
function showAlertAlreadyOpened(agreementLinks) {
    layer.close(depositpop);
    depositpop2 = layer.open({
        type: 1,
        content: '<div class="lay-content depository-main" style="height:4.95rem">' +
        '<div class="m-tit">' +
        '<h2>银行存管全面升级</h2>' +
        '</div>' +
        '<p class="lay-desc" style="margin-top:1.5rem">' +
        '您已在玖富集团其他平台开通华夏银行存管账户，交易密码在各平台通用。您可直接出借。' +
        '</p>' +
        '<div class="n-agreement1" style="text-align: center">' +
        '<img class="n-agreement1" onclick="agreement();" src="/images/deposit/result-off.png"/>本人已同意' +
        '<span onclick="agreementLink(\''+ agreementLinks +'\')">《授权协议书》</span>' +
        '</div>' +
        // '<span onclick="agreementLink(\''+ agreementLinks +'\')">《授权协议书》</span>' +
        '<button class="n-btn btn_bg btn_l" onclick="unUpdate()" style="margin-top:0.25rem">我知道了</button>' +
        '<p class="detail-msg" style="bottom:0.2rem">' +
        '</p>' +
        '</div>'
        , anim: 'scale'
        , style: 'width: 80%; height: auto; padding:10px 0;border-radius:0.2rem; border:none;'
    });
}

function toDepositUp(){
    $.ajax({
        type:"post",
        url : "/weixin/user/deposit/toModifyPwd.html",
        data:{"tradeType":"U4", "callbackJumpPath":"weixin/specialSale/index.html"},
        dataType:"json",
        success:function(o){

            var code = o.code;
            if(code != "000000"){
                showAlert("",o.message);
                return;
            }
            var data = o.data;
            if(data != null && data != '' && data != undefined){
                window.location.href=data.redirectUrl;
            }
        }
    });
}

function agreement() {
    if (isChecked == 'F') {
        isChecked = 'T';
        $('.n-agreement1 img').attr('src', '/images/deposit/result-on.png')
    } else {
        isChecked = 'F';
        $('.n-agreement1 img').attr('src', '/images/deposit/result-off.png')
    }
}

function agreementLink(ink) {

    window.location.href=ink;
    
}

function unUpdate() {
    $('.bankDepository').hide()
    $('.bankDepositoryMack').hide()
    $.ajax({
        type : "post",
        url : '/weixin/user/deposit/doNotModifyTransactionPwd.html',
        async:false,
        dataType: "json",
        success: function (o) {
            var code = o.code;
            if(code != "000000"){
                showAlert("", "系统繁忙请稍后再试");
                return;
            }
            layer.close(depositpop2);
        }
    });
}

// function showAlertAlreadyOpened(btn, message) {
//
//     $.ajax({
//         type : "post",
//         url: "/weixin/user/deposit/promptToOpenAnAccount.html",
//         async : false,
//         dataType:"json",
//         success:function (o) {
//             var code = o.code;
//             if(code != "0000"){
//                 showAlert("", "系统繁忙,请稍后再试");
//                 return;
//             }
//         }
//     });
//
//     if (btn == "") {
//         btn = "我知道了"
//     }
//     layer.open({
//         content: '<p style="font-size:0.28rem;line-height:0.4rem;">' + message + '</p>',
//         btn: btn,
//     });
// }