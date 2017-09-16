/**
 * DevControl.ocx函数封装
 * Copyright(C) 网算数据，2017-2020. All Rights Reserved!
 */

/*
 * 事    件：录音状态处理
 * 原    型：string AudioCaptureStatus(ieventid)
 * 说    明：
 * 参    数：ieventid事件编号
 * 返    回：状态
 */
function AudioCaptureStatus(ieventid) {
    var status = "";
    switch (ieventid){
        case 0:
            status = "closed";  // 录音机_关了
            break;
        case 1:
            status = "open";    // 录音机_打开
            break;
        case 2:
            status = "recording";    // 录音机_录音中
            break;
        case 3:
            status = "stop";    // 录音机_停止录音
            break;
        case 10:
            status = "error happens";    // 录音机_出错了
            break;
        default:
            status = "not known";    // 录音机_未知状态
    }
    return status;
}

/*
 * 事    件：语音识别状态处理
 * 原    型：string ASRStatus(ieventid)
 * 说    明：
 * 参    数：ieventid事件编号
 * 返    回：状态
 */
function ASRStatus(ieventid) {
    var status="";
    switch(ieventid){
        case 0:
            status = "ASR_NULL";    // 语音识别_未调用
            break;
        case 1:
            status = "ASR_recording";    // 语音识别_录音中
            break;
        case 2:
            status = "ASSR_getresulting(third party asring)";    // 语音识别_获取结果中
            break;
        case 3:
            status = "ASR_SUCCESS_FINISH";    // 语音识别_识别结束
            break;
        case 4:
            status = "ASR_ERROR";    // 语音识别_出错
            break;
        case 5:
            status = "ASR_TIMEOUT";    // 语音识别_超时出错
            break;
        case 6:
            status = "ASR_then nlp";    // 语音识别_ASR完获取NLP结果
            break;
        case 7:
            status = "ASR_stop";    // 语音识别_停止识别
            break;
        default:
            status = "NOT KNOEN";    // 语音识别_未知
    }
    return status;
}

function KefuAnswer(json) {
    var rt = "";
    return rt;
}

function ASRErrorAnswer(msg) {
    var rt = "";
    if (msg == "ASR_ERROR" || msg == "ASR_TIMEOUT" || msg == "NOT KNOEN") {
        rt = "抱歉，我没听清您讲什么，可以再说一遍吗？";
    }
    return rt;
}

function RobotAnswer(question) {
    var questionsArray = new Array();
    // 通用问题
    questionsArray[0] = "你好";
    questionsArray[1] = "你叫什么名字";
    questionsArray[2] = "你自我介绍一下";
    questionsArray[3] = "你会做什么";
    // 国税
    questionsArray[4] = "购买金税盘价格";
    questionsArray[5] = "领购金税盘及发行所需资料";
    questionsArray[6] = "领购金税盘及发行流程";
    questionsArray[7] = "代开增值税专用发票所需资料";
    questionsArray[8] = "代开增值税专用发票办理流程";
    questionsArray[9] = "代开增值税专用发票注意事项";
    questionsArray[10] = "首次申请开票系统所需资料";
    questionsArray[11] = "首次申请开票系统的流程";
    questionsArray[12] = "小规模企业自开专票范围";
    questionsArray[13] = "小规模企业自开专票所需资料";
    // 地税
    questionsArray[14] = "城镇土地使用税备案所需资料";
    questionsArray[15] = "城镇土地使用税备案办理流程";
    questionsArray[16] = "城镇土地使用税备案注意事项";
    questionsArray[17] = "做征管鉴定需要的资料";
    questionsArray[18] = "做征管鉴定注意事项";
    questionsArray[19] = "开房租发票需要的资料";
    questionsArray[20] = "开房租发票注意事项";
    questionsArray[21] = "财务制度备案需要的材料";
    questionsArray[22] = "财务制度备案注意事项";
    questionsArray[23] = "录三方协议需要的资料";

    // 回答
    var answerArray = new Array();
    answerArray[0] = "您好，我叫税小宝，有什么可以帮您？";
    answerArray[1] = "我叫税小宝";
    answerArray[2] = "您好，我叫税小宝，是税务方面的智能机器人";
    answerArray[3] = "我能能唱歌，能回答您关于税务方面的问题";

    answerArray[4] = "从8月1日起实施，金税盘从490元降到了200元，维护费从每年330元降到每年280元了！首次办理合计480元，以后每年280元服务费。";
    answerArray[5] = "金480元、公章、营业执照副本原件、开户许可证原件。";
    answerArray[6] = "1、到相应区域指定购买点购买金税盘；2、在企业所在区域的国税大厅指定窗口发行金税盘。";
    answerArray[7] = "代开增值税专用发票申请表、公章、发票专用章经办人身份证复印件、" +
                     "（有些区域需要携带企业录过指纹的人员身份证原件）。";
    answerArray[8] = "1、在陕西国税电子税务局纳税人端上填写代开增值税专用发票申请单，保存、提交并打印；" +
                     "2、带齐所需资料前往企业所在国税大厅指定窗口办理；" +
                     "3、部分区域窗口可直接出票，还有些区域需要在窗口办理完后，携带企业录过指纹的人员身份证原件在自助服务机上自行打印发票。";
    answerArray[9] = "1、代开增值税专用发票不享受增值税免税政策；" +
                     "2、代开增值税专用发票企业需要签好国税三方协议，税款在大厅现场从公户扣款；" +
                     "3、在陕西国税电子税务局纳税人端填写的申请表提交后需要尽快前往国税大厅办理代开，一定时间后信息会自动作废。";
    answerArray[10] = "1.票种核定表两份；（票种核定表在哪儿有/领取）" +
                      "2.执照原件及复印件；" +
                      "3.发票章、公章、法人章；" +
                      "4.经办人身份证原件及复印件 法人身份证复印件。";
    answerArray[11] = "递交完所需资料，去购买金税盘，等文书下来后，带着文书和金税盘在大厅发行，完后就可以正常领票了。";
    answerArray[12] = "1.住宿 ；2.鉴证咨询 ；3.建筑（必须月超过3万，季度超过9万）。";
    answerArray[13] = "1.票种核定表两份；" +
                      "2.执照原件及复印件；" +
                      "3.发票章、公章、法人章；" +
                      "4.经办人身份证原件及复印件。";

    answerArray[14] = "营业执照副本原件，公章。";
    answerArray[15] = "大厅填表盖公章到柜台办理即可。";
    answerArray[16] = "1、土地等级是大厅核定的；" +
                      "2、目前西安涉及到的城镇土地使用税备案区域有沣东，长安，灞桥。";
    answerArray[17] = "执照副本原件、公章、房租发票、公司章程、地址产权证明复印件（产权证明或商品买卖合同或房产证）、租赁合同、法人股东财务的身份证复印件。";
    answerArray[18] = "做征管鉴定之前，先核房产税、交房产税、开房租发票。";
    answerArray[19] = "地址产权证明复印件（产权证明或商品买卖合同或房产证）、租赁合同、房东身份证复印件、付款证明、开户许可证复印件。";
    answerArray[20] = "需要携带地址产权证明的原件。";
    answerArray[21] = "公司财务会计制度及核算办法、财务会计制度及核算软件备案报告书、财务软件名称版本介绍、执照副本原件、公章。";
    answerArray[22] = "可以在录信息的时候直接办理。";
    answerArray[23] = "国税三方协议、开户许可证原件、执照副本原件、公章、法人章。";

    for (var i=0; i<questionsArray.length; i++) {
        var str = questionsArray[i];
        if (str.indexOf(question) > 0) {
            return answerArray[i];
        }
    }

    return "抱歉，我还在不断学习中，这件事我帮不了你";
}




