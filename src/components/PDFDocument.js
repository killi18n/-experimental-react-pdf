import React from 'react';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
    // Image,
} from '@react-pdf/renderer';

/*
    const Document: typeof ReactPDF.Document;
    const Page: typeof ReactPDF.Page;
    const View: typeof ReactPDF.View;
    const Image: typeof ReactPDF.Image;
    const Text: typeof ReactPDF.Text;
    const Canvas: typeof ReactPDF.Canvas;
    const Link: typeof ReactPDF.Link;
    const Note: typeof ReactPDF.Note;
    const Font: typeof ReactPDF.Font;
    const StyleSheet: typeof ReactPDF.StyleSheet;
    const createInstance: typeof ReactPDF.createInstance;
    const PDFRenderer: typeof ReactPDF.PDFRenderer;
    const version: typeof ReactPDF.version;
    const pdf: typeof ReactPDF.pdf;
    const PDFViewer: typeof ReactPDF.PDFViewer;
    const BlobProvider: typeof ReactPDF.BlobProvider;
    const PDFDownloadLink: typeof ReactPDF.PDFDownloadLink;
*/

Font.register({
    family: 'juaFont',
    src: 'http://pop.baemin.com/fonts/jua/BMJUA_ttf.ttf',
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        width: '100%',
        fontFamily: 'juaFont',
        lineHeight: 2,
    },
    titleSection: {
        // margin: 10,
        padding: 15,
        // paddingLeft: 0,
        // paddingRight: 10,
        width: '100%',
        // flex: 1,
    },
    normalSection: {
        // margin: 10,
        padding: 15,
        // paddingLeft: 0,
        // paddingRight: 10,
        width: '100%',
        // flex: 1,
    },
    titleText: {
        fontWeight: 800,
        fontSize: 30,
    },
    normalText: {
        fontWeight: 600,
        fontSize: 13,
    },
    liText: {
        fontWeight: 600,
        fontSize: 13,
        marginTop: 8,
    },
    smallLiText: {
        fontWeight: 600,
        fontSize: 10,
        marginTop: 8,
        marginLeft: 4,
    },
    detailedText: {
        fontWeight: 600,
        fontSize: 11,
        marginTop: 8,
        marginLeft: 8,
    },
});

const PDFDocument = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.titleSection}>
                    <Text style={styles.titleText}>개인 정보 처리 방침</Text>
                </View>
                <View style={styles.normalSection}>
                    <Text style={styles.normalText}>
                        'https://tribleapp.com' 및 '트리블 모바일 앱'이하
                        '트리블'은(는) 개인정보보호법에 따라 이용자의 개인정보
                        보호 및 권익을 보호하고 개인정보와 관련한 이용자의
                        고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을
                        두고 있습니다. '트리블' 은(는) 회사는 개인정보처리방침을
                        개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여
                        공지할 것입니다.
                    </Text>
                    <Text style={styles.liText}>
                        * 본 방침은부터 2019년 4월 15일부터 시행됩니다.
                    </Text>
                    <Text style={styles.liText}>
                        1. 개인정보의 처리 목적 '트리블'은(는) 개인정보를 다음의
                        목적을 위해 처리합니다. 처리한 개인정보는 다음의
                        목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될
                        시에는 사전동의를 구할 예정입니다. 가. 홈페이지 회원가입
                        및 관리 회원 가입의사 확인, 회원제 서비스 제공에 따른
                        본인 식별·인증, 회원자격 유지·관리, 제한적 본인확인제
                        시행에 따른 본인확인, 서비스 부정이용 방지 등을 목적으로
                        개인정보를 처리합니다.
                    </Text>
                    <Text style={styles.liText}>2. 개인정보 파일 현황</Text>
                    <Text style={styles.smallLiText}>
                        1. '트리블'은(는) 법령에 따른 개인정보 보유·이용기간
                        또는 정보주체로부터 개인정보를 수집시에 동의 받은
                        개인정보 보유,이용기간 내에서 개인정보를
                        처리,보유합니다.
                    </Text>
                    <Text style={styles.liText}>
                        3. 개인정보 처리 및 보유 기간
                    </Text>
                    <Text style={styles.smallLiText}>
                        1. '트리블'은(는) 법령에 따른 개인정보 보유·이용기간
                        또는 정보주체로부터 개인정보를 수집시에 동의 받은
                        개인정보 보유,이용기간 내에서 개인정보를
                        처리,보유합니다.
                    </Text>
                    <Text style={styles.smallLiText}>
                        2. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                    </Text>
                    <Text style={styles.liText}>
                        4. "홈페이지 회원가입 및 관리", "홈페이지 회원가입 및
                        관리" 와 관련한 개인정보는 수집, 이용에 관한
                        동의일로부터 "준영구" 까지 위 이용목적을 위하여 보유,
                        이용 됩니다.
                    </Text>
                    <Text style={styles.smallLiText}>
                        1. 보유 근거 - 서비스 회원제 이용 목적
                    </Text>
                    <Text style={styles.liText}>
                        5. 개인정보의 제3자 제공에 관한 사항
                    </Text>
                    <Text style={styles.smallLiText}>
                        1. '트리블' 은(는) 정보주체의 동의, 법률의 특별한 규정
                        등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만
                        개인정보를 제3자에게 제공합니다. 또한 다음과 같이
                        개인정보를 제3자에게 제공하고 있습니다.
                    </Text>
                    <Text style={styles.detailedText}>
                        * 개인정보를 제공받는 자: 트리블
                    </Text>
                    <Text style={styles.detailedText}>
                        * 개인정보를 제공받는 자의 개인정보 이용목적: 이메일,
                        비밀번호
                    </Text>
                    <Text style={styles.detailedText}>
                        * 개인정보를 제공받는 자의 보유, 이용기간: 준영구
                    </Text>
                    <Text style={styles.liText}>6. 개인정보처리 위탁</Text>
                    <Text style={styles.smallLiText}>
                        1. '트리블' 은(는) 원활한 개인정보 업무처리를 위하여
                        다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                    </Text>
                    <Text style={styles.detailedText}>
                        * 위탁 받는 자(수탁자):
                    </Text>
                    <Text style={styles.detailedText}>
                        * 위탁하는 업무의 내용:
                    </Text>
                    <Text style={styles.detailedText}>* 위탁 기간:</Text>
                    <Text style={styles.smallLiText}>
                        2. '트리블' 은(는) 위탁계약 체결시 개인정보 보호법
                        제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지,
                        기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한
                        관리감독, 손해배상 등 책임에 관한 사항을 계약서 등
                        문서에 명시하고, 수탁자가 개인정보를 안전하게
                        처리하는지를 감독하고 있습니다.
                    </Text>
                    <Text style={styles.smallLiText}>
                        3. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이
                        본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
                    </Text>
                    <Text style={styles.liText}>
                        7. 정보주체와 법정대리인의 권리·의무 및 그 행사방법
                        이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수
                        있습니다.
                    </Text>
                    <Text style={styles.smallLiText}>
                        1. 정보주체는 Trible에 대해 언제든지 개인정보
                        열람,정정,삭제,처리정지 요구 등의 권리를 행사할 수
                        있습니다.
                    </Text>
                    <Text style={styles.smallLiText}>
                        2. 제1항에 따른 권리 행사는Trible에 대해 개인정보 보호법
                        시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX)
                        등을 통하여 하실 수 있으며 Trible은(는) 이에 대해 지체
                        없이 조치하겠습니다.
                    </Text>
                    <Text style={styles.smallLiText}>
                        3. 제1항에 따른 권리 행사는 정보주체의 법정대리인이나
                        위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이
                        경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른
                        위임장을 제출하셔야 합니다.
                    </Text>
                    <Text style={styles.smallLiText}>
                        4. 개인정보 열람 및 처리정지 요구는 개인정보보호법
                        제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가
                        제한 될 수 있습니다.
                    </Text>
                    <Text style={styles.smallLiText}>
                        5. 개인정보의 정정 및 삭제 요구는 다른 법령에서 그
                        개인정보가 수집 대상으로 명시되어 있는 경우에는 그
                        삭제를 요구할 수 없습니다.
                    </Text>
                    <Text style={styles.smallLiText}>
                        6. Trible은(는) 정보주체 권리에 따른 열람의 요구,
                        정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한
                        자가 본인이거나 정당한 대리인인지를 확인합니다.
                    </Text>
                    <Text style={styles.liText}>
                        8. 처리하는 개인정보의 항목 작성
                    </Text>
                    <Text style={styles.smallLiText}>
                        1. '트리블'은(는) 다음의 개인정보 항목을 처리하고
                        있습니다.
                    </Text>
                    <Text style={styles.detailedText}>
                        * 홈페이지 회원가입 및 관리 - 필수항목: 이메일, 비밀번호
                    </Text>
                    <Text style={styles.liText}>
                        9. 개인정보의 파기('트리블')은(는) 원칙적으로 개인정보
                        처리목적이 달성된 경우에는 지체없이 해당 개인정보를
                        파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.
                    </Text>
                    <Text style={styles.detailedText}>
                        * 파기절차: 이용자가 입력한 정보는 목적 달성 후 별도의
                        DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타
                        관련 법령에 따라 일정기간 저장된 후 혹은 즉시
                        파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한
                        경우가 아니고서는 다른 목적으로 이용되지 않습니다.
                    </Text>
                    <Text style={styles.detailedText}>
                        * 파기기한: 이용자의 개인정보는 개인정보의 보유기간이
                        경과된 경우에는 보유기간의 종료일로부터 5일 이내에,
                        개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의
                        종료 등 그 개인정보가 불필요하게 되었을 때에는
                        개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일
                        이내에 그 개인정보를 파기합니다.
                    </Text>
                    <Text style={styles.detailedText}>
                        * 파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수
                        없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는
                        분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                    </Text>
                    <Text style={styles.liText}>
                        10. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한
                        사항 Trible 은 정보주체의 이용정보를 저장하고 수시로
                        불러오는 "쿠키"를 사용하지 않습니다.
                    </Text>
                    <Text style={styles.liText}>
                        11. 개인정보 보호책임자 작성
                    </Text>
                    <Text style={styles.smallLiText}>
                        1. '트리블' 은(는) 개인정보 처리에 관한 업무를 총괄해서
                        책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및
                        피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를
                        지정하고 있습니다.
                    </Text>
                    <Text style={styles.detailedText}>
                        개인정보 보호책임자 성명: 최동호, 직책: 개발자, 직급
                        :개발자, 연락처 :01091292901, killi8n@gmail.com
                    </Text>
                    <Text style={styles.smallLiText}>
                        2. 정보주체께서는 '트리블' 의 서비스(또는 사업)을
                        이용하시면서 발생한 모든 개인정보 보호 관련 문의,
                        불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자
                        및 담당부서로 문의하실 수 있습니다. '트리블' 은(는)
                        정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴
                        것입니다.
                    </Text>
                    <Text style={styles.liText}>
                        12. 개인정보 처리방침 변경
                    </Text>
                    <Text style={styles.smallLiText}>
                        1. 이 개인정보처리방침은 시행일로부터 적용되며, 법령 및
                        방침에 따른 변경내용의 추가, 삭제 및 정정이 있는
                        경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여
                        고지할 것입니다.
                    </Text>
                    <Text style={styles.liText}>
                        13. 개인정보의 안전성 확보 조치 '트리블' 은(는)
                        개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에
                        필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
                    </Text>
                    <Text style={styles.liText}>
                        14. 해킹 등에 대비한 기술적 대책: '트리블' 은 해킹이나
                        컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기
                        위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며
                        외부로부터 접근이 통제된 구역에 시스템을 설치하고
                        기술적/물리적으로 감시 및 차단하고 있습니다.
                    </Text>
                    <Text style={styles.liText}>
                        15. 개인정보의 암호화: 이용자의 개인정보는 비밀번호는
                        암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며
                        중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일
                        잠금 기능을 사용하는 등의 별도 보안기능을 사용하고
                        있습니다.
                    </Text>
                    <Text style={styles.liText}>
                        16. 개인정보에 대한 접근 제한: 개인정보를 처리하는
                        데이터베이스시스템에 대한 접근권한의 부여,변경,말소를
                        통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를
                        하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단
                        접근을 통제하고 있습니다.
                    </Text>
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocument;
