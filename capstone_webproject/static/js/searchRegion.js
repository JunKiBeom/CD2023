// "시/도" 선택 시 해당 시의 "시/구/군" 옵션을 동적으로 변경
const citySelect = document.getElementById("city");
const districtSelect = document.getElementById("district");
const addressselect = document.getElementById("address")

citySelect.addEventListener("change", function() {
    const city = citySelect.value;
    if (city === "서울시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="강남구">강남구</option>
        <option value="강동구">강동구</option>
        <option value="강북구">강북구</option>
        <option value="강서구">강서구</option>
        <option value="관악구">관악구</option>
        <option value="광진구">광진구</option>
        <option value="구로구">구로구</option>
        <option value="금천구">금천구</option>
        <option value="노원구">노원구</option>
        <option value="도봉구">도봉구</option>
        <option value="동대문구">동대문구</option>
        <option value="동작구">동작구</option>
        <option value="마포구">마포구</option>
        <option value="서대문구">서대문구</option>
        <option value="서초구">서초구</option>
        <option value="성동구">성동구</option>
        <option value="성북구">성북구</option>
        <option value="송파구">송파구</option>
        <option value="양천구">양천구</option>
        <option value="영등포구">영등포구</option>
        <option value="용산구">용산구</option>
        <option value="은평구">은평구</option>
        <option value="종로구">종로구</option>
        <option value="중구">중구</option>
        <option value="중랑구">중랑구</option>
    `;
// 다른 구들에 대한 조건문을 추가로 작성해주세요.

    } else if (city === "대전시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="동구">동구</option>
        <option value="중구">중구</option>
        <option value="서구">서구</option>
        <option value="유성구">유성구</option>
        <option value="대덕구">대덕구</option>
        <!-- 다른 구들을 추가해 주세요 -->
    `;
    } else if (city == "부산시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="강서구">강서구</option>
        <option value="금정구">금정구</option>
        <option value="기장군">기장군</option>
        <option value="남구">남구</option>
        <option value="동구">동구</option>
        <option value="동래구">동래구</option>
        <option value="부산진구">부산진구</option>
        <option value="북구">북구</option>
        <option value="사상구">사상구</option>
        <option value="사하구">사하구</option>
        <option value="서구">서구</option>
        <option value="수영구">수영구</option>
        <option value="연제구">연제구</option>
        <option value="영도구">영도구</option>
        <option value="중구">중구</option>
        <option value="해운대구">해운대구</option>
    `;
    } else if (city === "인천시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="강화군">강화군</option>
        <option value="계양구">계양구</option>
        <option value="남동구">남동구</option>
        <option value="동구">동구</option>
        <option value="부평구">부평구</option>
        <option value="서구">서구</option>
        <option value="연수구">연수구</option>
        <option value="옹진군">옹진군</option>
        <option value="중구">중구</option>
    `;
    } else if (city === "광주시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="광산구">광산구</option>
        <option value="남구">남구</option>
        <option value="동구">동구</option>
        <option value="북구">북구</option>
        <option value="서구">서구</option>
    `;
    } else if (city === "울산시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="남구">남구</option>
        <option value="동구">동구</option>
        <option value="북구">북구</option>
        <option value="울주군">울주군</option>
        <option value="중구">중구</option>
    `;
    } else if (city === "대구시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="남구">남구</option>
        <option value="달서구">달서구</option>
        <option value="달성군">달성군</option>
        <option value="동구">동구</option>
        <option value="북구">북구</option>
        <option value="서구">서구</option>
        <option value="수성구">수성구</option>
        <option value="중구">중구</option>
    `;
    } else if (city === "세종시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="세종시">세종시</option>
    `;
    } else if (city === "경기도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="가평군">가평군</option>
        <option value="고양시 덕양구">고양시 덕양구</option>
        <option value="고양시 일산동구">고양시 일산동구</option>
        <option value="고양시 일산서구">고양시 일산서구</option>
        <option value="과천시">과천시</option>
        <option value="광명시">광명시</option>
        <option value="광주시">광주시</option>
        <option value="구리시">구리시</option>
        <option value="군포시">군포시</option>
        <option value="김포시">김포시</option>
        <option value="남양주시">남양주시</option>
        <option value="동두천시">동두천시</option>
        <option value="부천시 소사구">부천시 소사구</option>
        <option value="부천시 오정구">부천시 오정구</option>
        <option value="부천시 원미구">부천시 원미구</option>
        <option value="성남시 분당구">성남시 분당구</option>
        <option value="성남시 수정구">성남시 수정구</option>
        <option value="성남시 중원구">성남시 중원구</option>
        <option value="수원시 권선구">수원시 권선구</option>
        <option value="수원시 영통구">수원시 영통구</option>
        <option value="수원시 장안구">수원시 장안구</option>
        <option value="수원시 팔달구">수원시 팔달구</option>
        <option value="시흥시">시흥시</option>
        <option value="안산시 단원구">안산시 단원구</option>
        <option value="안산시 상록구">안산시 상록구</option>
        <option value="안성시">안성시</option>
        <option value="안양시 동안구">안양시 동안구</option>
        <option value="안양시 만안구">안양시 만안구</option>
        <option value="양주시">양주시</option>
        <option value="양평군">양평군</option>
        <option value="여주군">여주군</option>
        <option value="연천군">연천군</option>
        <option value="오산시">오산시</option>
        <option value="용인시 기흥구">용인시 기흥구</option>
        <option value="용인시 수지구">용인시 수지구</option>
        <option value="용인시 처인구">용인시 처인구</option>
        <option value="의왕시">의왕시</option>
        <option value="의정부시">의정부시</option>
        <option value="이천시">이천시</option>
        <option value="파주시">파주시</option>
        <option value="평택시">평택시</option>
        <option value="하남시">하남시</option>
        <option value="화성시">화성시</option>
    `;
    } else if (city === "강원도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="강릉시">강릉시</option>
        <option value="고성군">고성군</option>
        <option value="동해시">동해시</option>
        <option value="삼척시">삼척시</option>
        <option value="속초시">속초시</option>
        <option value="양구군">양구군</option>
        <option value="양양군">양양군</option>
        <option value="영월군">영월군</option>
        <option value="원주시">원주시</option>
        <option value="인제군">인제군</option>
        <option value="정선군">정선군</option>
        <option value="철원군">철원군</option>
        <option value="춘천시">춘천시</option>
        <option value="태백시">태백시</option>
        <option value="평창군">평창군</option>
        <option value="홍천군">홍천군</option>
        <option value="화천군">화천군</option>
        <option value="횡성군">횡성군</option>
    `;
    } else if (city === "충청북도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="괴산군">괴산군</option>
        <option value="단양군">단양군</option>
        <option value="보은군">보은군</option>
        <option value="영동군">영동군</option>
        <option value="옥천군">옥천군</option>
        <option value="음성군">음성군</option>
        <option value="제천시">제천시</option>
        <option value="증평군">증평군</option>
        <option value="진천군">진천군</option>
        <option value="청주시 상당구">청주시 상당구</option>
        <option value="청주시 서원구">청주시 서원구</option>
        <option value="청주시 청원구">청주시 청원구</option>
        <option value="청주시 흥덕구">청주시 흥덕구</option>
        <option value="충주시">충주시</option>
    `;
    } else if (city === "충청남도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="계룡시">계룡시</option>
        <option value="공주시">공주시</option>
        <option value="금산군">금산군</option>
        <option value="논산시">논산시</option>
        <option value="당진시">당진시</option>
        <option value="보령시">보령시</option>
        <option value="부여군">부여군</option>
        <option value="서산시">서산시</option>
        <option value="서천군">서천군</option>
        <option value="아산시">아산시</option>
        <option value="예산군">예산군</option>
        <option value="천안시 동남구">천안시 동남구</option>
        <option value="천안시 서북구">천안시 서북구</option>
        <option value="청양군">청양군</option>
        <option value="태안군">태안군</option>
        <option value="홍성군">홍성군</option>
    `;
    } else if (city === "전라북도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="고창군">고창군</option>
        <option value="군산시">군산시</option>
        <option value="김제시">김제시</option>
        <option value="남원시">남원시</option>
        <option value="무주군">무주군</option>
        <option value="부안군">부안군</option>
        <option value="순창군">순창군</option>
        <option value="완주군">완주군</option>
        <option value="익산시">익산시</option>
        <option value="임실군">임실군</option>
        <option value="장수군">장수군</option>
        <option value="Jeonju-si">전주시</option>
        <option value="정읍시">정읍시</option>
        <option value="진안군">진안군</option>
    `;
    } else if (city === "전라남도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="강진군">강진군</option>
        <option value="고흥군">고흥군</option>
        <option value="곡성군">곡성군</option>
        <option value="광양시">광양시</option>
        <option value="구례군">구례군</option>
        <option value="나주시">나주시</option>
        <option value="담양군">담양군</option>
        <option value="목포시">목포시</option>
        <option value="무안군">무안군</option>
        <option value="보성군">보성군</option>
        <option value="순천시">순천시</option>
        <option value="신안군">신안군</option>
        <option value="여수시">여수시</option>
        <option value="영광군">영광군</option>
        <option value="영암군">영암군</option>
        <option value="완도군">완도군</option>
        <option value="장성군">장성군</option>
        <option value="장흥군">장흥군</option>
        <option value="진도군">진도군</option>
        <option value="함평군">함평군</option>
        <option value="해남군">해남군</option>
        <option value="화순군">화순군</option>
    `;
    } else if (city === "경상북도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="경산시">경산시</option>
        <option value="경주시">경주시</option>
        <option value="고령군">고령군</option>
        <option value="구미시">구미시</option>
        <option value="군위군">군위군</option>
        <option value="김천시">김천시</option>
        <option value="문경시">문경시</option>
        <option value="봉화군">봉화군</option>
        <option value="상주시">상주시</option>
        <option value="성주군">성주군</option>
        <option value="안동시">안동시</option>
        <option value="영덕군">영덕군</option>
        <option value="영양군">영양군</option>
        <option value="영주시">영주시</option>
        <option value="영천시">영천시</option>
        <option value="예천군">예천군</option>
        <option value="울릉군">울릉군</option>
        <option value="울진군">울진군</option>
        <option value="의성군">의성군</option>
        <option value="청도군">청도군</option>
        <option value="청송군">청송군</option>
        <option value="칠곡군">칠곡군</option>
        <option value="포항시 남구">포항시 남구</option>
        <option value="포항시 북구">포항시 북구</option>
    `;
    } else if (city === "경상남도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="거제시">거제시</option>
        <option value="거창군">거창군</option>
        <option value="고성군">고성군</option>
        <option value="김해시">김해시</option>
        <option value="남해군">남해군</option>
        <option value="밀양시">밀양시</option>
        <option value="사천시">사천시</option>
        <option value="산청군">산청군</option>
        <option value="양산시">양산시</option>
        <option value="의령군">의령군</option>
        <option value="진주시">진주시</option>
        <option value="창녕군">창녕군</option>
        <option value="창원시 마산합포구">창원시 마산합포구</option>
        <option value="창원시 마산회원구">창원시 마산회원구</option>
        <option value="창원시 성산구">창원시 성산구</option>
        <option value="창원시 의창구">창원시 의창구</option>
        <option value="창원시 진해구">창원시 진해구</option>
        <option value="통영시">통영시</option>
        <option value="하동군">하동군</option>
        <option value="함안군">함안군</option>
        <option value="함양군">함양군</option>
        <option value="합천군">합천군</option>
    `;
    } else if (city === "제주도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="서귀포시">서귀포시</option>
        <option value="제주시">제주시</option>
    `;
    } else {
        districtSelect.innerHTML = `<option value="">구/군 선택</option>`;
    }
})

districtSelect.addEventListener("change", function() {
    // 서울시
    const district = districtSelect.value;
    if (districtSelect.value === '강남구') {
        addressselect.innerHTML = `
            <option value='개포동'>개포동</option>
            <option value='논현동'>논현동</option>
            <option value='대치동'>대치동</option>
            <option value='도곡동'>도곡동</option>
            <option value='삼성동'>삼성동</option>
            <option value='세곡동'>세곡동</option>
            <option value='수서동'>수서동</option>
            <option value='신사동'>신사동</option>
            <option value='압구정동'>압구정동</option>
            <option value='역삼동'>역삼동</option>
            <option value='율현동'>율현동</option>
            <option value='일원동'>일원동</option>
            <option value='자곡동'>자곡동</option>
            <option value='청담동'>청담동</option>
            <option value='포이동'>포이동</option>
            <option value='학동'>학동</option>
            <option value='현림동'>현림동</option>
            <option value='현충로'>현충로</option>
            <option value='화곡동'>화곡동</option>
        `;
    }

    else if (citySelect.value === '서울시' && districtSelect.value === '강동구') {
        addressselect.innerHTML = `
            <option value='고덕동'>고덕동</option>
            <option value='길동'>길동</option>
            <option value='둔촌동'>둔촌동</option>
            <option value='명일동'>명일동</option>
            <option value='상일동'>상일동</option>
            <option value='성내동'>성내동</option>
            <option value='암사동'>암사동</option>
            <option value='천호동'>천호동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '강북구') {
        addressselect.innerHTML = `
            <option value='미아동'>미아동</option>
            <option value='번동'>번동</option>
            <option value='삼각산동'>삼각산동</option>
            <option value='송중동'>송중동</option>
            <option value='송천동'>송천동</option>
            <option value='수유동'>수유동</option>
            <option value='우이동'>우이동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '강서구') {
        addressselect.innerHTML = `
            <option value='가양동'>가양동</option>
            <option value='공항동'>공항동</option>
            <option value='내발산동'>내발산동</option>
            <option value='등촌동'>등촌동</option>
            <option value='마곡동'>마곡동</option>
            <option value='염창동'>염창동</option>
            <option value='외발산동'>외발산동</option>
            <option value='화곡동'>화곡동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '관악구') {
        addressselect.innerHTML = `
            <option value='낙성대동'>낙성대동</option>
            <option value='남현동'>남현동</option>
            <option value='봉천동'>봉천동</option>
            <option value='서원동'>서원동</option>
            <option value='신림동'>신림동</option>
            <option value='신사동'>신사동</option>
            <option value='신원동'>신원동</option>
            <option value='은천동'>은천동</option>
            <option value='인헌동'>인헌동</option>
            <option value='조원동'>조원동</option>
            <option value='중앙동'>중앙동</option>
            <option value='청림동'>청림동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '노원구') {
        addressselect.innerHTML = `
            <option value='공릉동'>공릉동</option>
            <option value='상계동'>상계동</option>
            <option value='월계동'>월계동</option>
            <option value='중계동'>중계동</option>
            <option value='하계동'>하계동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '도봉구') {
        addressselect.innerHTML = `
            <option value='도봉동'>도봉동</option>
            <option value='도봉산동'>도봉산동</option>
            <option value='방학동'>방학동</option>
            <option value='쌍문동'>쌍문동</option>
            <option value='창동'>창동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '동대문구') {
        addressselect.innerHTML = `
            <option value='답십리2동'>답십리2동</option>
            <option value='답십리동'>답십리동</option>
            <option value='신답동'>신답동</option>
            <option value='신설동'>신설동</option>
            <option value='용두동'>용두동</option>
            <option value='이문동'>이문동</option>
            <option value='장안동'>장안동</option>
            <option value='장한평동'>장한평동</option>
            <option value='전농동'>전농동</option>
            <option value='제기동'>제기동</option>
            <option value='청량리동'>청량리동</option>
            <option value='회기동'>회기동</option>
            <option value='휘경동'>휘경동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '동작구') {
        addressselect.innerHTML = `
            <option value='노량진동'>노량진동</option>
            <option value='대방동'>대방동</option>
            <option value='본동'>본동</option>
            <option value='봉천동'>봉천동</option>
            <option value='사당동'>사당동</option>
            <option value='상도1동'>상도1동</option>
            <option value='상도2동'>상도2동</option>
            <option value='상도3동'>상도3동</option>
            <option value='상도4동'>상도4동</option>
            <option value='상도5동'>상도5동</option>
            <option value='상도6동'>상도6동</option>
            <option value='상도7동'>상도7동</option>
            <option value='신대방동'>신대방동</option>
            <option value='흑석동'>흑석동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '마포구') {
        addressselect.innerHTML = `
            <option value='당인동'>당인동</option>
            <option value='도화동'>도화동</option>
            <option value='동교동'>동교동</option>
            <option value='망원동'>망원동</option>
            <option value='상수동'>상수동</option>
            <option value='상암동'>상암동</option>
            <option value='서교동'>서교동</option>
            <option value='성산동'>성산동</option>
            <option value='신공덕동'>신공덕동</option>
            <option value='신수동'>신수동</option>
            <option value='신정동'>신정동</option>
            <option value='아현동'>아현동</option>
            <option value='연남동'>연남동</option>
            <option value='염리동'>염리동</option>
            <option value='용강동'>용강동</option>
            <option value='중동'>중동</option>
            <option value='창전동'>창전동</option>
            <option value='토정동'>토정동</option>
            <option value='하중동'>하중동</option>
            <option value='합정동'>합정동</option>
            <option value='홍은동'>홍은동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '서대문구') {
        addressselect.innerHTML = `
            <option value='남가좌동'>남가좌동</option>
            <option value='북가좌동'>북가좌동</option>
            <option value='북아현동'>북아현동</option>
            <option value='신촌동'>신촌동</option>
            <option value='연희동'>연희동</option>
            <option value='창천동'>창천동</option>
            <option value='천연동'>천연동</option>
            <option value='충정로2가'>충정로2가</option>
            <option value='홍은동'>홍은동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '서초구') {
        addressselect.innerHTML = `
            <option value='내곡동'>내곡동</option>
            <option value='반포동'>반포동</option>
            <option value='방배동'>방배동</option>
            <option value='서초동'>서초동</option>
            <option value='신원동'>신원동</option>
            <option value='양재동'>양재동</option>
            <option value='염곡동'>염곡동</option>
            <option value='우면동'>우면동</option>
            <option value='원지동'>원지동</option>
            <option value='잠원동'>잠원동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '성동구') {
        addressselect.innerHTML = `
            <option value='금호동1가'>금호동1가</option>
            <option value='금호동2가'>금호동2가</option>
            <option value='금호동3가'>금호동3가</option>
            <option value='금호동4가'>금호동4가</option>
            <option value='도선동'>도선동</option>
            <option value='마장동'>마장동</option>
            <option value='사근동'>사근동</option>
            <option value='상왕십리동'>상왕십리동</option>
            <option value='성수동1가'>성수동1가</option>
            <option value='성수동2가'>성수동2가</option>
            <option value='송정동'>송정동</option>
            <option value='옥수동'>옥수동</option>
            <option value='용답동'>용답동</option>
            <option value='응봉동'>응봉동</option>
            <option value='하왕십리동'>하왕십리동</option>
            <option value='행당동'>행당동</option>
            <option value='홍익동'>홍익동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '성북구') {
        addressselect.innerHTML = `
            <option value='길음동'>길음동</option>
            <option value='돈암동'>돈암동</option>
            <option value='동선동'>동선동</option>
            <option value='동소문동'>동소문동</option>
            <option value='삼선동'>삼선동</option>
            <option value='상월곡동'>상월곡동</option>
            <option value='석관동'>석관동</option>
            <option value='월곡동'>월곡동</option>
            <option value='장위동'>장위동</option>
            <option value='정릉동'>정릉동</option>
            <option value='종암동'>종암동</option>
            <option value='하월곡동'>하월곡동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '송파구') {
        addressselect.innerHTML = `
            <option value='가락동'>가락동</option>
            <option value='문정동'>문정동</option>
            <option value='방이동'>방이동</option>
            <option value='삼전동'>삼전동</option>
            <option value='석촌동'>석촌동</option>
            <option value='송파동'>송파동</option>
            <option value='신천동'>신천동</option>
            <option value='오금동'>오금동</option>
            <option value='잠실동'>잠실동</option>
            <option value='장지동'>장지동</option>
            <option value='풍납동'>풍납동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '양천구') {
        addressselect.innerHTML = `
            <option value='목동'>목동</option>
            <option value='신도림동'>신도림동</option>
            <option value='신월동'>신월동</option>
            <option value='신정동'>신정동</option>
            <option value='양평동'>양평동</option>
            <option value='오류동'>오류동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '영등포구') {
        addressselect.innerHTML = `
            <option value='당산동'>당산동</option>
            <option value='당산동1가'>당산동1가</option>
            <option value='당산동2가'>당산동2가</option>
            <option value='당산동3가'>당산동3가</option>
            <option value='당산동4가'>당산동4가</option>
            <option value='당산동5가'>당산동5가</option>
            <option value='당산동6가'>당산동6가</option>
            <option value='도림동'>도림동</option>
            <option value='문래동1가'>문래동1가</option>
            <option value='문래동2가'>문래동2가</option>
            <option value='문래동3가'>문래동3가</option>
            <option value='문래동4가'>문래동4가</option>
            <option value='문래동5가'>문래동5가</option>
            <option value='문래동6가'>문래동6가</option>
            <option value='양평동2가'>양평동2가</option>
            <option value='영등포동1가'>영등포동1가</option>
            <option value='영등포동2가'>영등포동2가</option>
            <option value='영등포동3가'>영등포동3가</option>
            <option value='영등포동4가'>영등포동4가</option>
            <option value='영등포동5가'>영등포동5가</option>
            <option value='영등포동6가'>영등포동6가</option>
            <option value='영등포동7가'>영등포동7가</option>
            <option value='영등포동8가'>영등포동8가</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '용산구') {
        addressselect.innerHTML = `
            <option value='갈월동'>갈월동</option>
            <option value='남영동'>남영동</option>
            <option value='도원동'>도원동</option>
            <option value='동빙고동'>동빙고동</option>
            <option value='문배동'>문배동</option>
            <option value='보광동'>보광동</option>
            <option value='서빙고동'>서빙고동</option>
            <option value='신계동'>신계동</option>
            <option value='용문동'>용문동</option>
            <option value='용산동1가'>용산동1가</option>
            <option value='용산동2가'>용산동2가</option>
            <option value='용산동3가'>용산동3가</option>
            <option value='용산동4가'>용산동4가</option>
            <option value='용산동5가'>용산동5가</option>
            <option value='용산동6가'>용산동6가</option>
            <option value='원효로2가'>원효로2가</option>
            <option value='이촌동'>이촌동</option>
            <option value='이태원동'>이태원동</option>
            <option value='주성동'>주성동</option>
            <option value='한강로1가'>한강로1가</option>
            <option value='한강로2가'>한강로2가</option>
            <option value='한강로3가'>한강로3가</option>
            <option value='한남동'>한남동</option>
            <option value='효창동'>효창동</option>
            <option value='후암동'>후암동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '은평구') {
        addressselect.innerHTML = `
            <option value='갈현동'>갈현동</option>
            <option value='구산동'>구산동</option>
            <option value='녹번동'>녹번동</option>
            <option value='불광동'>불광동</option>
            <option value='수색동'>수색동</option>
            <option value='신사동'>신사동</option>
            <option value='역촌동'>역촌동</option>
            <option value='증산동'>증산동</option>
            <option value='진관동'>진관동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '종로구') {
        addressselect.innerHTML = `
            <option value='가회동'>가회동</option>
            <option value='견지동'>견지동</option>
            <option value='경운동'>경운동</option>
            <option value='계동'>계동</option>
            <option value='공평동'>공평동</option>
            <option value='관수동'>관수동</option>
            <option value='관철동'>관철동</option>
            <option value='관훈동'>관훈동</option>
            <option value='교남동'>교남동</option>
            <option value='교북동'>교북동</option>
            <option value='구기동'>구기동</option>
            <option value='궁정동'>궁정동</option>
            <option value='권농동'>권농동</option>
            <option value='낙원동'>낙원동</option>
            <option value='내수동'>내수동</option>
            <option value='내자동'>내자동</option>
            <option value='누상동'>누상동</option>
            <option value='누하동'>누하동</option>
            <option value='당주동'>당주동</option>
            <option value='도렴동'>도렴동</option>
            <option value='돈의동'>돈의동</option>
            <option value='동숭동'>동숭동</option>
            <option value='명륜1가'>명륜1가</option>
            <option value='명륜2가'>명륜2가</option>
            <option value='명륜3가'>명륜3가</option>
            <option value='명륜4가'>명륜4가</option>
            <option value='묘동'>묘동</option>
            <option value='봉익동'>봉익동</option>
            <option value='부암동'>부암동</option>
            <option value='사간동'>사간동</option>
            <option value='사직동'>사직동</option>
            <option value='삼청동'>삼청동</option>
            <option value='서린동'>서린동</option>
            <option value='세종로'>세종로</option>
            <option value='소격동'>소격동</option>
            <option value='송월동'>송월동</option>
            <option value='송현동'>송현동</option>
            <option value='수송동'>수송동</option>
            <option value='숭인동'>숭인동</option>
            <option value='신교동'>신교동</option>
            <option value='신문로1가'>신문로1가</option>
            <option value='신문로2가'>신문로2가</option>
            <option value='안국동'>안국동</option>
            <option value='연건동'>연건동</option>
            <option value='연지동'>연지동</option>
            <option value='예지동'>예지동</option>
            <option value='옥인동'>옥인동</option>
            <option value='와룡동'>와룡동</option>
            <option value='운니동'>운니동</option>
            <option value='원남동'>원남동</option>
            <option value='원서동'>원서동</option>
            <option value='이화동'>이화동</option>
            <option value='익선동'>익선동</option>
            <option value='인사동'>인사동</option>
            <option value='인의동'>인의동</option>
            <option value='장사동'>장사동</option>
            <option value='재동'>재동</option>
            <option value='적선동'>적선동</option>
            <option value='종로1가'>종로1가</option>
            <option value='종로2가'>종로2가</option>
            <option value='종로3가'>종로3가</option>
            <option value='종로4가'>종로4가</option>
            <option value='종로5가'>종로5가</option>
            <option value='종로6가'>종로6가</option>
            <option value='중학동'>중학동</option>
            <option value='창성동'>창성동</option>
            <option value='창신동'>창신동</option>
            <option value='청운동'>청운동</option>
            <option value='청진동'>청진동</option>
            <option value='체부동'>체부동</option>
            <option value='충신동'>충신동</option>
            <option value='통의동'>통의동</option>
            <option value='통인동'>통인동</option>
            <option value='팔판동'>팔판동</option>
            <option value='평동'>평동</option>
            <option value='평창동'>평창동</option>
            <option value='필운동'>필운동</option>
            <option value='행촌동'>행촌동</option>
            <option value='혜화동'>혜화동</option>
            <option value='홍지동'>홍지동</option>
            <option value='화동'>화동</option>
            <option value='효자동'>효자동</option>
            <option value='효제동'>효제동</option>
            <option value='훈정동'>훈정동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '중구') {
        addressselect.innerHTML = `
            <option value='광희동1가'>광희동1가</option>
            <option value='광희동2가'>광희동2가</option>
            <option value='남대문로2가'>남대문로2가</option>
            <option value='남대문로3가'>남대문로3가</option>
            <option value='남대문로4가'>남대문로4가</option>
            <option value='남대문로5가'>남대문로5가</option>
            <option value='남산동1가'>남산동1가</option>
            <option value='남산동2가'>남산동2가</option>
            <option value='남산동3가'>남산동3가</option>
            <option value='남창동'>남창동</option>
            <option value='남학동'>남학동</option>
            <option value='만리동1가'>만리동1가</option>
            <option value='만리동2가'>만리동2가</option>
            <option value='명동1가'>명동1가</option>
            <option value='명동2가'>명동2가</option>
            <option value='무학동'>무학동</option>
            <option value='묵정동'>묵정동</option>
            <option value='방산동'>방산동</option>
            <option value='봉래동1가'>봉래동1가</option>
            <option value='봉래동2가'>봉래동2가</option>
            <option value='북창동'>북창동</option>
            <option value='산림동'>산림동</option>
            <option value='서소문동'>서소문동</option>
            <option value='소공동'>소공동</option>
            <option value='수표동'>수표동</option>
            <option value='수하동'>수하동</option>
            <option value='순화동'>순화동</option>
            <option value='신당동'>신당동</option>
            <option value='쌍림동'>쌍림동</option>
            <option value='예관동'>예관동</option>
            <option value='예장동'>예장동</option>
            <option value='오장동'>오장동</option>
            <option value='을지로3가'>을지로3가</option>
            <option value='을지로4가'>을지로4가</option>
            <option value='을지로5가'>을지로5가</option>
            <option value='을지로6가'>을지로6가</option>
            <option value='을지로7가'>을지로7가</option>
            <option value='의주로1가'>의주로1가</option>
            <option value='의주로2가'>의주로2가</option>
            <option value='인현동1가'>인현동1가</option>
            <option value='인현동2가'>인현동2가</option>
            <option value='입정동'>입정동</option>
            <option value='장교동'>장교동</option>
            <option value='장충동1가'>장충동1가</option>
            <option value='장충동2가'>장충동2가</option>
            <option value='저동1가'>저동1가</option>
            <option value='저동2가'>저동2가</option>
            <option value='정동'>정동</option>
            <option value='주교동'>주교동</option>
            <option value='주자동'>주자동</option>
            <option value='중림동'>중림동</option>
            <option value='초동'>초동</option>
            <option value='충무로1가'>충무로1가</option>
            <option value='충무로2가'>충무로2가</option>
            <option value='충무로3가'>충무로3가</option>
            <option value='충무로4가'>충무로4가</option>
            <option value='충무로5가'>충무로5가</option>
            <option value='충정로1가'>충정로1가</option>
            <option value='태평로1가'>태평로1가</option>
            <option value='태평로2가'>태평로2가</option>
            <option value='필동1가'>필동1가</option>
            <option value='필동2가'>필동2가</option>
            <option value='필동3가'>필동3가</option>
            <option value='황학동'>황학동</option>
            <option value='회현동1가'>회현동1가</option>
            <option value='회현동2가'>회현동2가</option>
            <option value='회현동3가'>회현동3가</option>
            <option value='흥인동'>흥인동</option>
        `;
    }else if (citySelect.value=== '부산시' && districtSelect.value === '강서구') {
        addressselect.innerHTML = `
            <option value='대저1동'>대저1동</option>
            <option value='대저2동'>대저2동</option>
            <option value='강동동'>강동동</option>
            <option value='명지동'>명지동</option>
            <option value='죽림동'>죽림동</option>
            <option value='식만동'>식만동</option>
            <option value='죽동동'>죽동동</option>
            <option value='봉림동'>봉림동</option>
            <option value='송정동'>송정동</option>
            <option value='화전동'>화전동</option>
            <option value='녹산동'>녹산동</option>
            <option value='생곡동'>생곡동</option>
            <option value='구랑동'>구랑동</option>
            <option value='지사동'>지사동</option>
            <option value='미음동'>미음동</option>
            <option value='범방동'>범방동</option>
            <option value='신호동'>신호동</option>
            <option value='동선동'>동선동</option>
            <option value='성북동'>성북동</option>
            <option value='눌차동'>눌차동</option>
            <option value='천성동'>천성동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '금정구') {
        addressselect.innerHTML = `
            <option value='두구동'>두구동</option>
            <option value='노포동'>노포동</option>
            <option value='청룡동'>청룡동</option>
            <option value='남산동'>남산동</option>
            <option value='선동'>선동</option>
            <option value='오륜동'>오륜동</option>
            <option value='구서동'>구서동</option>
            <option value='장전동'>장전동</option>
            <option value='부곡동'>부곡동</option>
            <option value='서동'>서동</option>
            <option value='금사동'>금사동</option>
            <option value='회동동'>회동동</option>
            <option value='금성동'>금성동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '기장군') {
        addressselect.innerHTML = `
            <option value='기장읍'>기장읍</option>
            <option value='장안읍'>장안읍</option>
            <option value='정관읍'>정관읍</option>
            <option value='일광읍'>일광읍</option>
            <option value='철마면'>철마면</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '남구') {
        addressselect.innerHTML = `
            <option value='대연동'>대연동</option>
            <option value='용호동'>용호동</option>
            <option value='용당동'>용당동</option>
            <option value='문현동'>문현동</option>
            <option value='우암동'>우암동</option>
            <option value='감만동'>감만동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '동구') {
        addressselect.innerHTML = `
            <option value='초량동'>초량동</option>
            <option value='수정동'>수정동</option>
            <option value='좌천동'>좌천동</option>
            <option value='범일동'>범일동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '동래구') {
        addressselect.innerHTML = `
            <option value='명장동'>명장동</option>
            <option value='안락동'>안락동</option>
            <option value='칠산동'>칠산동</option>
            <option value='낙민동'>낙민동</option>
            <option value='복천동'>복천동</option>
            <option value='수안동'>수안동</option>
            <option value='명륜동'>명륜동</option>
            <option value='온천동'>온천동</option>
            <option value='사직동'>사직동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '부산진구') {
        addressselect.innerHTML = `
            <option value='양정동'>양정동</option>
            <option value='전포동'>전포동</option>
            <option value='부전동'>부전동</option>
            <option value='범천동'>범천동</option>
            <option value='범전동'>범전동</option>
            <option value='연지동'>연지동</option>
            <option value='초읍동'>초읍동</option>
            <option value='부암동'>부암동</option>
            <option value='당감동'>당감동</option>
            <option value='가야동'>가야동</option>
            <option value='개금동'>개금동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '북구') {
        addressselect.innerHTML = `
            <option value='금곡동'>금곡동</option>
            <option value='화명동'>화명동</option>
            <option value='만덕동'>만덕동</option>
            <option value='덕천동'>덕천동</option>
            <option value='구포동'>구포동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '사상구') {
        addressselect.innerHTML = `
            <option value='삼락동'>삼락동</option>
            <option value='모라동'>모라동</option>
            <option value='덕포동'>덕포동</option>
            <option value='괘법동'>괘법동</option>
            <option value='감전동'>감전동</option>
            <option value='주례동'>주례동</option>
            <option value='학장동'>학장동</option>
            <option value='엄궁동'>엄궁동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '사하구') {
        addressselect.innerHTML = `
            <option value='괴정동'>괴정동</option>
            <option value='당리동'>당리동</option>
            <option value='하단동'>하단동</option>
            <option value='신평동'>신평동</option>
            <option value='장림동'>장림동</option>
            <option value='다대동'>다대동</option>
            <option value='구평동'>구평동</option>
            <option value='감천동'>감천동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '서구') {
        addressselect.innerHTML = `
            <option value='동대신동1가'>동대신동1가</option>
            <option value='동대신동2가'>동대신동2가</option>
            <option value='동대신동3가'>동대신동3가</option>
            <option value='서대신동1가'>서대신동1가</option>
            <option value='서대신동2가'>서대신동2가</option>
            <option value='서대신동3가'>서대신동3가</option>
            <option value='부용동1가'>부용동1가</option>
            <option value='부용동2가'>부용동2가</option>
            <option value='부민동1가'>부민동1가</option>
            <option value='부민동2가'>부민동2가</option>
            <option value='부민동3가'>부민동3가</option>
            <option value='토성동1가'>토성동1가</option>
            <option value='토성동2가'>토성동2가</option>
            <option value='토성동3가'>토성동3가</option>
            <option value='아미동1가'>아미동1가</option>
            <option value='아미동2가'>아미동2가</option>
            <option value='토성동4가'>토성동4가</option>
            <option value='토성동5가'>토성동5가</option>
            <option value='초장동'>초장동</option>
            <option value='충무동1가'>충무동1가</option>
            <option value='충무동2가'>충무동2가</option>
            <option value='충무동3가'>충무동3가</option>
            <option value='남부민동'>남부민동</option>
            <option value='암남동'>암남동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '수영구') {
        addressselect.innerHTML = `
            <option value='망미동'>망미동</option>
            <option value='수영동'>수영동</option>
            <option value='민락동'>민락동</option>
            <option value='광안동'>광안동</option>
            <option value='남천동'>남천동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '연제구') {
        addressselect.innerHTML = `
            <option value='거제동'>거제동</option>
            <option value='연산동'>연산동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '영도구') {
        addressselect.innerHTML = `
            <option value='대교동1가'>대교동1가</option>
            <option value='대교동2가'>대교동2가</option>
            <option value='대평동1가'>대평동1가</option>
            <option value='대평동2가'>대평동2가</option>
            <option value='남항동1가'>남항동1가</option>
            <option value='남항동2가'>남항동2가</option>
            <option value='남항동3가'>남항동3가</option>
            <option value='영선동1가'>영선동1가</option>
            <option value='영선동2가'>영선동2가</option>
            <option value='영선동3가'>영선동3가</option>
            <option value='영선동4가'>영선동4가</option>
            <option value='신선동1가'>신선동1가</option>
            <option value='신선동2가'>신선동2가</option>
            <option value='신선동3가'>신선동3가</option>
            <option value='봉래동1가'>봉래동1가</option>
            <option value='봉래동2가'>봉래동2가</option>
            <option value='봉래동3가'>봉래동3가</option>
            <option value='봉래동4가'>봉래동4가</option>
            <option value='봉래동5가'>봉래동5가</option>
            <option value='청학동'>청학동</option>
            <option value='동삼동'>동삼동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '중구') {
        addressselect.innerHTML = `
            <option value='영주동'>영주동</option>
            <option value='대창동1가'>대창동1가</option>
            <option value='대창동2가'>대창동2가</option>
            <option value='중앙동1가'>중앙동1가</option>
            <option value='중앙동2가'>중앙동2가</option>
            <option value='중앙동3가'>중앙동3가</option>
            <option value='중앙동4가'>중앙동4가</option>
            <option value='중앙동5가'>중앙동5가</option>
            <option value='중앙동6가'>중앙동6가</option>
            <option value='중앙동7가'>중앙동7가</option>
            <option value='동광동1가'>동광동1가</option>
            <option value='동광동2가'>동광동2가</option>
            <option value='동광동3가'>동광동3가</option>
            <option value='동광동4가'>동광동4가</option>
            <option value='동광동5가'>동광동5가</option>
            <option value='대청동1가'>대청동1가</option>
            <option value='대청동2가'>대청동2가</option>
            <option value='대청동3가'>대청동3가</option>
            <option value='대청동4가'>대청동4가</option>
            <option value='보수동1가'>보수동1가</option>
            <option value='보수동2가'>보수동2가</option>
            <option value='보수동3가'>보수동3가</option>
            <option value='부평동1가'>부평동1가</option>
            <option value='부평동2가'>부평동2가</option>
            <option value='부평동3가'>부평동3가</option>
            <option value='부평동4가'>부평동4가</option>
            <option value='신창동1가'>신창동1가</option>
            <option value='신창동2가'>신창동2가</option>
            <option value='신창동3가'>신창동3가</option>
            <option value='신창동4가'>신창동4가</option>
            <option value='창선동1가'>창선동1가</option>
            <option value='창선동2가'>창선동2가</option>
            <option value='광복동1가'>광복동1가</option>
            <option value='광복동2가'>광복동2가</option>
            <option value='광복동3가'>광복동3가</option>
            <option value='남포동1가'>남포동1가</option>
            <option value='남포동2가'>남포동2가</option>
            <option value='남포동3가'>남포동3가</option>
            <option value='남포동4가'>남포동4가</option>
            <option value='남포동5가'>남포동5가</option>
            <option value='남포동6가'>남포동6가</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '해운대구') {
        addressselect.innerHTML = `
            <option value='반송동'>반송동</option>
            <option value='석대동'>석대동</option>
            <option value='반여동'>반여동</option>
            <option value='재송동'>재송동</option>
            <option value='우동'>우동</option>
            <option value='중동'>중동</option>
            <option value='좌동'>좌동</option>
            <option value='송정동'>송정동</option>
        `;
    }else if (citySelect.value=== '대구시' && districtSelect.value === "중구") {
        addressselect.innerHTML = `
            <option value="동인동1가">동인동1가</option>
            <option value="동인동2가">동인동2가</option>
            <option value="동인동3가">동인동3가</option>
            <option value="동인동4가">동인동4가</option>
            <option value="삼덕동1가">삼덕동1가</option>
            <option value="삼덕동2가">삼덕동2가</option>
            <option value="삼덕동3가">삼덕동3가</option>
            <option value="봉산동">봉산동</option>
            <option value="장관동">장관동</option>
            <option value="상서동">상서동</option>
            <option value="수동">수동</option>
            <option value="덕산동">덕산동</option>
            <option value="종로1가">종로1가</option>
            <option value="종로2가">종로2가</option>
            <option value="사일동">사일동</option>
            <option value="동일동">동일동</option>
            <option value="남일동">남일동</option>
            <option value="전동">전동</option>
            <option value="동성로3가">동성로3가</option>
            <option value="동문동">동문동</option>
            <option value="서야동">서야동</option>
            <option value="서성로1가">서성로1가</option>
            <option value="시장북로">시장북로</option>
            <option value="하서동">하서동</option>
            <option value="남성로">남성로</option>
            <option value="계산동1가">계산동1가</option>
            <option value="계산동2가">계산동2가</option>
            <option value="동산동">동산동</option>
            <option value="서문로2가">서문로2가</option>
            <option value="서성로2가">서성로2가</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "동구") {
        addressselect.innerHTML = `
            <option value="내곡동">내곡동</option>
            <option value="능성동">능성동</option>
            <option value="진인동">진인동</option>
            <option value="도학동">도학동</option>
            <option value="백안동">백안동</option>
            <option value="미곡동">미곡동</option>
            <option value="용수동">용수동</option>
            <option value="신무동">신무동</option>
            <option value="미대동">미대동</option>
            <option value="내동">내동</option>
            <option value="신용동">신용동</option>
            <option value="중대동">중대동</option>
            <option value="송정동">송정동</option>
            <option value="덕곡동">덕곡동</option>
            <option value="지묘동">지묘동</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "서구") {
        addressselect.innerHTML = `
            <option value="내당동">내당동</option>
            <option value="비산동">비산동</option>
            <option value="평리동">평리동</option>
            <option value="상리동">상리동</option>
            <option value="중리동">중리동</option>
            <option value="이현동">이현동</option>
            <option value="원대동1가">원대동1가</option>
            <option value="원대동2가">원대동2가</option>
            <option value="원대동3가">원대동3가</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "남구") {
        addressselect.innerHTML = `
            <option value="이천동">이천동</option>
            <option value="봉덕동">봉덕동</option>
            <option value="대명동">대명동</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "북구") {
        addressselect.innerHTML = `
            <option value="칠성동1가">칠성동1가</option>
            <option value="칠성동2가">칠성동2가</option>
            <option value="고성동1가">고성동1가</option>
            <option value="고성동2가">고성동2가</option>
            <option value="고성동3가">고성동3가</option>
            <option value="침산동">침산동</option>
            <option value="노원동1가">노원동1가</option>
            <option value="노원동2가">노원동2가</option>
            <option value="노원동3가">노원동3가</option>
            <option value="대현동">대현동</option>
            <option value="산격동">산격동</option>
            <option value="복현동">복현동</option>
            <option value="검단동">검단동</option>
            <option value="동변동">동변동</option>
            <option value="서변동">서변동</option>
            <option value="조야동">조야동</option>
            <option value="노곡동">노곡동</option>
            <option value="읍내동">읍내동</option>
            <option value="동호동">동호동</option>
            <option value="학정동">학정동</option>
            <option value="도남동">도남동</option>
            <option value="국우동">국우동</option>
            <option value="구암동">구암동</option>
            <option value="동천동">동천동</option>
            <option value="관음동">관음동</option>
            <option value="태전동">태전동</option>
            <option value="매천동">매천동</option>
            <option value="팔달동">팔달동</option>
            <option value="금호동">금호동</option>
            <option value="사수동">사수동</option>
            <option value="연경동">연경동</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "수성구") {
        addressselect.innerHTML = `
            <option value="범어동">범어동</option>
            <option value="만촌동">만촌동</option>
            <option value="수성동1가">수성동1가</option>
            <option value="수성동2가">수성동2가</option>
            <option value="수성동3가">수성동3가</option>
            <option value="수성동4가">수성동4가</option>
            <option value="황금동">황금동</option>
            <option value="중동">중동</option>
            <option value="상동">상동</option>
            <option value="파동">파동</option>
            <option value="두산동">두산동</option>
            <option value="지산동">지산동</option>
            <option value="범물동">범물동</option>
            <option value="시지동">시지동</option>
            <option value="매호동">매호동</option>
            <option value="성동">성동</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "달서구") {
        addressselect.innerHTML = `
            <option value="파호동">파호동</option>
            <option value="호림동">호림동</option>
            <option value="갈산동">갈산동</option>
            <option value="신당동">신당동</option>
            <option value="이곡동">이곡동</option>
            <option value="장동">장동</option>
            <option value="장기동">장기동</option>
            <option value="용산동">용산동</option>
            <option value="죽전동">죽전동</option>
            <option value="감삼동">감삼동</option>
            <option value="본리동">본리동</option>
            <option value="상인동">상인동</option>
            <option value="도원동">도원동</option>
            <option value="진천동">진천동</option>
            <option value="유천동">유천동</option>
            <option value="대천동">대천동</option>
            <option value="월성동">월성동</option>
            <option value="월암동">월암동</option>
            <option value="송현동">송현동</option>
            <option value="대곡동">대곡동</option>
            <option value="본동">본동</option>
            <option value="호산동">호산동</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "달성군") {
        addressselect.innerHTML = `
            <option value="화원읍">화원읍</option>
            <option value="유가읍">유가읍</option>
            <option value="옥포읍">옥포읍</option>
            <option value="현풍읍">현풍읍</option>
            <option value="가창면">가창면</option>
            <option value="하빈면">하빈면</option>
            <option value="구지면">구지면</option>
        `;
    }else if (citySelect.value=== '인천시' && districtSelect.value === '강화군') {
        addressselect.innerHTML = `
            <option value='강화읍'>강화읍</option>
            <option value='선원면'>선원면</option>
            <option value='불은면'>불은면</option>
            <option value='길상면'>길상면</option>
            <option value='화도면'>화도면</option>
            <option value='양도면'>양도면</option>
            <option value='내가면'>내가면</option>
            <option value='하점면'>하점면</option>
            <option value='교동면'>교동면</option>
            <option value='삼산면'>삼산면</option>
            <option value='서도면'>서도면</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '계양구') {
        addressselect.innerHTML = `
            <option value='효성동'>효성동</option>
            <option value='계산동'>계산동</option>
            <option value='작전동'>작전동</option>
            <option value='서운동'>서운동</option>
            <option value='임학동'>임학동</option>
            <option value='용종동'>용종동</option>
            <option value='병방동'>병방동</option>
            <option value='방축동'>방축동</option>
            <option value='박촌동'>박촌동</option>
            <option value='동양동'>동양동</option>
            <option value='귤현동'>귤현동</option>
            <option value='상야동'>상야동</option>
            <option value='하야동'>하야동</option>
            <option value='평동'>평동</option>
            <option value='노오지동'>노오지동</option>
            <option value='선주지동'>선주지동</option>
            <option value='이화동'>이화동</option>
            <option value='오류동'>오류동</option>
            <option value='갈현동'>갈현동</option>
            <option value='둑실동'>둑실동</option>
            <option value='목상동'>목상동</option>
            <option value='다남동'>다남동</option>
            <option value='장기동'>장기동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '남동구') {
        addressselect.innerHTML = `
            <option value='남촌동'>남촌동</option>
            <option value='수산동'>수산동</option>
            <option value='도림동'>도림동</option>
            <option value='논현동'>논현동</option>
            <option value='고잔동'>고잔동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '동구') {
        addressselect.innerHTML = `
            <option value='만석동'>만석동</option>
            <option value='화수동'>화수동</option>
            <option value='송현동'>송현동</option>
            <option value='화평동'>화평동</option>
            <option value='창영동'>창영동</option>
            <option value='금곡동'>금곡동</option>
            <option value='송림동'>송림동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '미추홀구') {
        addressselect.innerHTML = `
            <option value='숭의동'>숭의동</option>
            <option value='용현동'>용현동</option>
            <option value='학익동'>학익동</option>
            <option value='도화동'>도화동</option>
            <option value='주안동'>주안동</option>
            <option value='관교동'>관교동</option>
            <option value='문학동'>문학동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '부평구') {
        addressselect.innerHTML = `
            <option value='부평동'>부평동</option>
            <option value='삼산동'>삼산동</option>
            <option value='갈산동'>갈산동</option>
            <option value='부개동'>부개동</option>
            <option value='일신동'>일신동</option>
            <option value='구산동'>구산동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '서구') {
        addressselect.innerHTML = `
            <option value='백석동'>백석동</option>
            <option value='시천동'>시천동</option>
            <option value='검암동'>검암동</option>
            <option value='경서동'>경서동</option>
            <option value='공촌동'>공촌동</option>
            <option value='연희동'>연희동</option>
            <option value='심곡동'>심곡동</option>
            <option value='가정동'>가정동</option>
            <option value='신현동'>신현동</option>
            <option value='석남동'>석남동</option>
            <option value='원창동'>원창동</option>
            <option value='가좌동'>가좌동</option>
            <option value='마전동'>마전동</option>
            <option value='당하동'>당하동</option>
            <option value='원당동'>원당동</option>
            <option value='대곡동'>대곡동</option>
            <option value='금곡동'>금곡동</option>
            <option value='오류동'>오류동</option>
            <option value='왕길동'>왕길동</option>
            <option value='불로동'>불로동</option>
            <option value='청라동'>청라동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '연수구') {
        addressselect.innerHTML = `
            <option value='연수동'>연수동</option>
            <option value='동춘동'>동춘동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '옹진군') {
        addressselect.innerHTML = `
            <option value='덕적면'>덕적면</option>
            <option value='영흥면'>영흥면</option>
            <option value='자월면'>자월면</option>
            <option value='연평면'>연평면</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '중구') {
        addressselect.innerHTML = `
            <option value='중앙동4가'>중앙동4가</option>
            <option value='해안동1가'>해안동1가</option>
            <option value='해안동2가'>해안동2가</option>
            <option value='해안동3가'>해안동3가</option>
            <option value='해안동4가'>해안동4가</option>
            <option value='관동1가'>관동1가</option>
            <option value='관동2가'>관동2가</option>
            <option value='관동3가'>관동3가</option>
            <option value='항동1가'>항동1가</option>
            <option value='항동2가'>항동2가</option>
            <option value='항동3가'>항동3가</option>
            <option value='항동4가'>항동4가</option>
            <option value='항동5가'>항동5가</option>
            <option value='항동6가'>항동6가</option>
            <option value='항동7가'>항동7가</option>
            <option value='송학동1가'>송학동1가</option>
            <option value='송학동2가'>송학동2가</option>
            <option value='송학동3가'>송학동3가</option>
            <option value='사동'>사동</option>
            <option value='신생동'>신생동</option>
            <option value='신포동'>신포동</option>
            <option value='답동'>답동</option>
            <option value='신흥동1가'>신흥동1가</option>
            <option value='신흥동2가'>신흥동2가</option>
            <option value='신흥동3가'>신흥동3가</option>
            <option value='선화동'>선화동</option>
            <option value='유동'>유동</option>
            <option value='율목동'>율목동</option>
            <option value='도원동'>도원동</option>
            <option value='내동'>내동</option>
            <option value='경동'>경동</option>
            <option value='용동'>용동</option>
            <option value='인현동'>인현동</option>
            <option value='전동'>전동</option>
            <option value='북성동1가'>북성동1가</option>
            <option value='북성동2가'>북성동2가</option>
            <option value='북성동3가'>북성동3가</option>
            <option value='선린동'>선린동</option>
            <option value='송월동1가'>송월동1가</option>
            <option value='송월동2가'>송월동2가</option>
            <option value='송월동3가'>송월동3가</option>
            <option value='중산동'>중산동</option>
            <option value='운남동'>운남동</option>
            <option value='운서동'>운서동</option>
            <option value='운북동'>운북동</option>
            <option value='을왕동'>을왕동</option>
            <option value='남북동'>남북동</option>
            <option value='덕교동'>덕교동</option>
            <option value='무의동'>무의동</option>
        `;
    }else if (citySelect.value=== '광주시' && districtSelect.value === '광산구') {
        addressselect.innerHTML = `
            <option value='고룡동'>고룡동</option>
            <option value='광산동'>광산동</option>
            <option value='남산동'>남산동</option>
            <option value='내산동'>내산동</option>
            <option value='대산동'>대산동</option>
            <option value='덕림동'>덕림동</option>
            <option value='도덕동'>도덕동</option>
            <option value='도산동'>도산동</option>
            <option value='도천동'>도천동</option>
            <option value='도호동'>도호동</option>
            <option value='동림동'>동림동</option>
            <option value='동산동'>동산동</option>
            <option value='동호동'>동호동</option>
            <option value='두정동'>두정동</option>
            <option value='등임동'>등임동</option>
            <option value='명도동'>명도동</option>
            <option value='명화동'>명화동</option>
            <option value='박호동'>박호동</option>
            <option value='복룡동'>복룡동</option>
            <option value='본덕동'>본덕동</option>
            <option value='북산동'>북산동</option>
            <option value='비아동'>비아동</option>
            <option value='사호동'>사호동</option>
            <option value='산막동'>산막동</option>
            <option value='산수동'>산수동</option>
            <option value='산월동'>산월동</option>
            <option value='산정동'>산정동</option>
            <option value='삼거동'>삼거동</option>
            <option value='삼도동'>삼도동</option>
            <option value='서봉동'>서봉동</option>
            <option value='선동'>선동</option>
            <option value='선암동'>선암동</option>
            <option value='소촌동'>소촌동</option>
            <option value='송대동'>송대동</option>
            <option value='송산동'>송산동</option>
            <option value='송정동'>송정동</option>
            <option value='송촌동'>송촌동</option>
            <option value='송치동'>송치동</option>
            <option value='송학동'>송학동</option>
            <option value='수완동'>수완동</option>
            <option value='신가동'>신가동</option>
            <option value='신동'>신동</option>
            <option value='신룡동'>신룡동</option>
            <option value='신창동'>신창동</option>
            <option value='신촌동'>신촌동</option>
            <option value='쌍암동'>쌍암동</option>
            <option value='안청동'>안청동</option>
            <option value='양동'>양동</option>
            <option value='양산동'>양산동</option>
            <option value='연산동'>연산동</option>
            <option value='오산동'>오산동</option>
            <option value='오선동'>오선동</option>
            <option value='오운동'>오운동</option>
            <option value='옥동'>옥동</option>
            <option value='왕동'>왕동</option>
            <option value='요기동'>요기동</option>
            <option value='용곡동'>용곡동</option>
            <option value='용동'>용동</option>
            <option value='용봉동'>용봉동</option>
            <option value='우산동'>우산동</option>
            <option value='운남동'>운남동</option>
            <option value='운수동'>운수동</option>
            <option value='월계동'>월계동</option>
            <option value='월곡동'>월곡동</option>
            <option value='월전동'>월전동</option>
            <option value='유계동'>유계동</option>
            <option value='임곡동'>임곡동</option>
            <option value='장덕동'>장덕동</option>
            <option value='장록동'>장록동</option>
            <option value='장수동'>장수동</option>
            <option value='지산동'>지산동</option>
            <option value='지정동'>지정동</option>
            <option value='지죽동'>지죽동</option>
            <option value='지평동'>지평동</option>
            <option value='진곡동'>진곡동</option>
            <option value='하남동'>하남동</option>
            <option value='하산동'>하산동</option>
            <option value='황룡동'>황룡동</option>
            <option value='흑석동'>흑석동</option>
        `;
    }
    else if (citySelect.value=== '광주시' && districtSelect.value === '남구') {
        addressselect.innerHTML = `
            <option value='구동'>구동</option>
            <option value='구소동'>구소동</option>
            <option value='노대동'>노대동</option>
            <option value='대지동'>대지동</option>
            <option value='덕남동'>덕남동</option>
            <option value='도금동'>도금동</option>
            <option value='방림동'>방림동</option>
            <option value='백운동'>백운동</option>
            <option value='봉선동'>봉선동</option>
            <option value='사동'>사동</option>
            <option value='서동'>서동</option>
            <option value='송하동'>송하동</option>
            <option value='승촌동'>승촌동</option>
            <option value='신장동'>신장동</option>
            <option value='압촌동'>압촌동</option>
            <option value='양과동'>양과동</option>
            <option value='양림동'>양림동</option>
            <option value='양촌동'>양촌동</option>
            <option value='원산동'>원산동</option>
            <option value='월산동'>월산동</option>
            <option value='월성동'>월성동</option>
            <option value='이장동'>이장동</option>
            <option value='임암동'>임암동</option>
            <option value='주월동'>주월동</option>
            <option value='지석동'>지석동</option>
            <option value='진월동'>진월동</option>
            <option value='칠석동'>칠석동</option>
            <option value='행암동'>행암동</option>
            <option value='화장동'>화장동</option>
        `;
    }
    else if (citySelect.value=== '광주시' && districtSelect.value === '동구') {
        addressselect.innerHTML = `
            <option value='계림동'>계림동</option>
            <option value='광산동'>광산동</option>
            <option value='궁동'>궁동</option>
            <option value='금남로1가'>금남로1가</option>
            <option value='금남로2가'>금남로2가</option>
            <option value='금남로3가'>금남로3가</option>
            <option value='금남로4가'>금남로4가</option>
            <option value='금남로5가'>금남로5가</option>
            <option value='금동'>금동</option>
            <option value='남동'>남동</option>
            <option value='내남동'>내남동</option>
            <option value='대의동'>대의동</option>
            <option value='대인동'>대인동</option>
            <option value='동명동'>동명동</option>
            <option value='불로동'>불로동</option>
            <option value='산수동'>산수동</option>
            <option value='서석동'>서석동</option>
            <option value='선교동'>선교동</option>
            <option value='소태동'>소태동</option>
            <option value='수기동'>수기동</option>
            <option value='용산동'>용산동</option>
            <option value='용연동'>용연동</option>
            <option value='운림동'>운림동</option>
            <option value='월남동'>월남동</option>
            <option value='장동'>장동</option>
            <option value='지산동'>지산동</option>
            <option value='충장로1가'>충장로1가</option>
            <option value='충장로2가'>충장로2가</option>
            <option value='충장로3가'>충장로3가</option>
            <option value='충장로4가'>충장로4가</option>
            <option value='충장로5가'>충장로5가</option>
            <option value='학동'>학동</option>
            <option value='호남동'>호남동</option>
            <option value='황금동'>황금동</option>
        `;
    }
    else if (citySelect.value=== '광주시' && districtSelect.value === '북구') {
        addressselect.innerHTML = `
            <option value='각화동'>각화동</option>
            <option value='금곡동'>금곡동</option>
            <option value='누문동'>누문동</option>
            <option value='대촌동'>대촌동</option>
            <option value='덕의동'>덕의동</option>
            <option value='동림동'>동림동</option>
            <option value='두암동'>두암동</option>
            <option value='망월동'>망월동</option>
            <option value='매곡동'>매곡동</option>
            <option value='문흥동'>문흥동</option>
            <option value='본촌동'>본촌동</option>
            <option value='북동'>북동</option>
            <option value='삼각동'>삼각동</option>
            <option value='생용동'>생용동</option>
            <option value='수곡동'>수곡동</option>
            <option value='신안동'>신안동</option>
            <option value='신용동'>신용동</option>
            <option value='양산동'>양산동</option>
            <option value='연제동'>연제동</option>
            <option value='오룡동'>오룡동</option>
            <option value='오치동'>오치동</option>
            <option value='용강동'>용강동</option>
            <option value='용두동'>용두동</option>
            <option value='용봉동'>용봉동</option>
            <option value='용전동'>용전동</option>
            <option value='우산동'>우산동</option>
            <option value='운암동'>운암동</option>
            <option value='운정동'>운정동</option>
            <option value='월출동'>월출동</option>
            <option value='유동'>유동</option>
            <option value='일곡동'>일곡동</option>
            <option value='임동'>임동</option>
            <option value='장등동'>장등동</option>
            <option value='중흥동'>중흥동</option>
            <option value='지야동'>지야동</option>
            <option value='청풍동'>청풍동</option>
            <option value='충효동'>충효동</option>
            <option value='태령동'>태령동</option>
            <option value='풍향동'>풍향동</option>
            <option value='화암동'>화암동</option>
            <option value='효령동'>효령동</option>
        `;
    }
    else if (citySelect.value=== '광주시' && districtSelect.value === '서구') {
        addressselect.innerHTML = `
            <option value='광천동'>광천동</option>
            <option value='금호동'>금호동</option>
            <option value='내방동'>내방동</option>
            <option value='농성동'>농성동</option>
            <option value='덕흥동'>덕흥동</option>
            <option value='동천동'>동천동</option>
            <option value='마륵동'>마륵동</option>
            <option value='매월동'>매월동</option>
            <option value='벽진동'>벽진동</option>
            <option value='서창동'>서창동</option>
            <option value='세하동'>세하동</option>
            <option value='쌍촌동'>쌍촌동</option>
            <option value='양동'>양동</option>
            <option value='용두동'>용두동</option>
            <option value='유촌동'>유촌동</option>
            <option value='치평동'>치평동</option>
            <option value='풍암동'>풍암동</option>
            <option value='화정동'>화정동</option>
        `;
    }else if (citySelect.value=== '대전시' && districtSelect.value === '대덕구') {
        addressselect.innerHTML = `
            <option value='갈전동'>갈전동</option>
            <option value='대화동'>대화동</option>
            <option value='덕암동'>덕암동</option>
            <option value='목상동'>목상동</option>
            <option value='문평동'>문평동</option>
            <option value='미호동'>미호동</option>
            <option value='법동'>법동</option>
            <option value='부수동'>부수동</option>
            <option value='비래동'>비래동</option>
            <option value='삼정동'>삼정동</option>
            <option value='상서동'>상서동</option>
            <option value='석봉동'>석봉동</option>
            <option value='송촌동'>송촌동</option>
            <option value='신대동'>신대동</option>
            <option value='신일동'>신일동</option>
            <option value='신탄진동'>신탄진동</option>
            <option value='연축동'>연축동</option>
            <option value='오정동'>오정동</option>
            <option value='와동'>와동</option>
            <option value='용호동'>용호동</option>
            <option value='읍내동'>읍내동</option>
            <option value='이현동'>이현동</option>
            <option value='장동'>장동</option>
            <option value='중리동'>중리동</option>
            <option value='평촌동'>평촌동</option>
            <option value='황호동'>황호동</option>
        `;
    }
    else if (citySelect.value=== '대전시' && districtSelect.value === '동구') {
        addressselect.innerHTML = `
            <option value='가양동'>가양동</option>
            <option value='가오동'>가오동</option>
            <option value='구도동'>구도동</option>
            <option value='낭월동'>낭월동</option>
            <option value='내탑동'>내탑동</option>
            <option value='대동'>대동</option>
            <option value='대별동'>대별동</option>
            <option value='대성동'>대성동</option>
            <option value='마산동'>마산동</option>
            <option value='비룡동'>비룡동</option>
            <option value='사성동'>사성동</option>
            <option value='삼괴동'>삼괴동</option>
            <option value='삼성동'>삼성동</option>
            <option value='삼정동'>삼정동</option>
            <option value='상소동'>상소동</option>
            <option value='성남동'>성남동</option>
            <option value='세천동'>세천동</option>
            <option value='소제동'>소제동</option>
            <option value='소호동'>소호동</option>
            <option value='신상동'>신상동</option>
            <option value='신안동'>신안동</option>
            <option value='신촌동'>신촌동</option>
            <option value='신하동'>신하동</option>
            <option value='신흥동'>신흥동</option>
            <option value='오동'>오동</option>
            <option value='용계동'>용계동</option>
            <option value='용운동'>용운동</option>
            <option value='용전동'>용전동</option>
            <option value='원동'>원동</option>
            <option value='이사동'>이사동</option>
            <option value='인동'>인동</option>
            <option value='자양동'>자양동</option>
            <option value='장척동'>장척동</option>
            <option value='정동'>정동</option>
            <option value='주산동'>주산동</option>
            <option value='주촌동'>주촌동</option>
            <option value='중동'>중동</option>
            <option value='직동'>직동</option>
            <option value='천동'>천동</option>
            <option value='추동'>추동</option>
            <option value='판암동'>판암동</option>
            <option value='하소동'>하소동</option>
            <option value='홍도동'>홍도동</option>
            <option value='효동'>효동</option>
            <option value='효평동'>효평동</option>
        `;
    }
    else if (citySelect.value=== '대전시' && districtSelect.value === '서구') {
        addressselect.innerHTML = `
            <option value='가수원동'>가수원동</option>
            <option value='가장동'>가장동</option>
            <option value='갈마동'>갈마동</option>
            <option value='관저동'>관저동</option>
            <option value='괴곡동'>괴곡동</option>
            <option value='내동'>내동</option>
            <option value='도마동'>도마동</option>
            <option value='도안동'>도안동</option>
            <option value='둔산동'>둔산동</option>
            <option value='만년동'>만년동</option>
            <option value='매노동'>매노동</option>
            <option value='변동'>변동</option>
            <option value='복수동'>복수동</option>
            <option value='봉곡동'>봉곡동</option>
            <option value='산직동'>산직동</option>
            <option value='오동'>오동</option>
            <option value='용문동'>용문동</option>
            <option value='용촌동'>용촌동</option>
            <option value='우명동'>우명동</option>
            <option value='원정동'>원정동</option>
            <option value='월평동'>월평동</option>
            <option value='장안동'>장안동</option>
            <option value='정림동'>정림동</option>
            <option value='탄방동'>탄방동</option>
            <option value='평촌동'>평촌동</option>
            <option value='흑석동'>흑석동</option>
        `;
    }
    else if (citySelect.value=== '대전시' && districtSelect.value === '유성구') {
        addressselect.innerHTML = `
            <option value='가정동'>가정동</option>
            <option value='갑동'>갑동</option>
            <option value='계산동'>계산동</option>
            <option value='관평동'>관평동</option>
            <option value='교촌동'>교촌동</option>
            <option value='구룡동'>구룡동</option>
            <option value='구성동'>구성동</option>
            <option value='구암동'>구암동</option>
            <option value='궁동'>궁동</option>
            <option value='금고동'>금고동</option>
            <option value='금탄동'>금탄동</option>
            <option value='노은동'>노은동</option>
            <option value='대동'>대동</option>
            <option value='대정동'>대정동</option>
            <option value='덕명동'>덕명동</option>
            <option value='덕진동'>덕진동</option>
            <option value='도룡동'>도룡동</option>
            <option value='둔곡동'>둔곡동</option>
            <option value='문지동'>문지동</option>
            <option value='반석동'>반석동</option>
            <option value='방동'>방동</option>
            <option value='방현동'>방현동</option>
            <option value='복용동'>복용동</option>
            <option value='봉명동'>봉명동</option>
            <option value='봉산동'>봉산동</option>
            <option value='상대동'>상대동</option>
            <option value='성북동'>성북동</option>
            <option value='세동'>세동</option>
            <option value='송강동'>송강동</option>
            <option value='송정동'>송정동</option>
            <option value='수남동'>수남동</option>
            <option value='신동'>신동</option>
            <option value='신봉동'>신봉동</option>
            <option value='신성동'>신성동</option>
            <option value='안산동'>안산동</option>
            <option value='어은동'>어은동</option>
            <option value='외삼동'>외삼동</option>
            <option value='용계동'>용계동</option>
            <option value='용산동'>용산동</option>
            <option value='원내동'>원내동</option>
            <option value='원신흥동'>원신흥동</option>
            <option value='원촌동'>원촌동</option>
            <option value='자운동'>자운동</option>
            <option value='장대동'>장대동</option>
            <option value='장동'>장동</option>
            <option value='전민동'>전민동</option>
            <option value='죽동'>죽동</option>
            <option value='지족동'>지족동</option>
            <option value='추목동'>추목동</option>
            <option value='탑립동'>탑립동</option>
            <option value='하기동'>하기동</option>
            <option value='학하동'>학하동</option>
            <option value='화암동'>화암동</option>
        `;
    }
    else if (citySelect.value=== '대전시' && districtSelect.value === '중구') {
        addressselect.innerHTML = `
            <option value='구완동'>구완동</option>
            <option value='금동'>금동</option>
            <option value='대사동'>대사동</option>
            <option value='대흥동'>대흥동</option>
            <option value='목달동'>목달동</option>
            <option value='목동'>목동</option>
            <option value='무수동'>무수동</option>
            <option value='문창동'>문창동</option>
            <option value='문화동'>문화동</option>
            <option value='부사동'>부사동</option>
            <option value='사정동'>사정동</option>
            <option value='산성동'>산성동</option>
            <option value='석교동'>석교동</option>
            <option value='선화동'>선화동</option>
            <option value='안영동'>안영동</option>
            <option value='어남동'>어남동</option>
            <option value='오류동'>오류동</option>
            <option value='옥계동'>옥계동</option>
            <option value='용두동'>용두동</option>
            <option value='유천동'>유천동</option>
            <option value='은행동'>은행동</option>
            <option value='정생동'>정생동</option>
            <option value='중촌동'>중촌동</option>
            <option value='침산동'>침산동</option>
            <option value='태평동'>태평동</option>
            <option value='호동'>호동</option>
        `;
    }else if (citySelect.value=== '울산시' && districtSelect.value === '남구') {
        addressselect.innerHTML = `
            <option value='고사동'>고사동</option>
            <option value='남화동'>남화동</option>
            <option value='달동'>달동</option>
            <option value='두왕동'>두왕동</option>
            <option value='매암동'>매암동</option>
            <option value='무거동'>무거동</option>
            <option value='부곡동'>부곡동</option>
            <option value='삼산동'>삼산동</option>
            <option value='상개동'>상개동</option>
            <option value='선암동'>선암동</option>
            <option value='성암동'>성암동</option>
            <option value='신정동'>신정동</option>
            <option value='야음동'>야음동</option>
            <option value='여천동'>여천동</option>
            <option value='옥동'>옥동</option>
            <option value='용연동'>용연동</option>
            <option value='용잠동'>용잠동</option>
            <option value='장생포동'>장생포동</option>
            <option value='황성동'>황성동</option>
        `;
    }
    else if (citySelect.value=== '울산시' && districtSelect.value === '동구') {
        addressselect.innerHTML = `
            <option value='동부동'>동부동</option>
            <option value='미포동'>미포동</option>
            <option value='방어동'>방어동</option>
            <option value='일산동'>일산동</option>
            <option value='주전동'>주전동</option>
            <option value='화정동'>화정동</option>
        `;
    }
    else if (citySelect.value=== '울산시' && districtSelect.value === '북구') {
        addressselect.innerHTML = `
            <option value='구유동'>구유동</option>
            <option value='달천동'>달천동</option>
            <option value='당사동'>당사동</option>
            <option value='대안동'>대안동</option>
            <option value='명촌동'>명촌동</option>
            <option value='무룡동'>무룡동</option>
            <option value='산하동'>산하동</option>
            <option value='상안동'>상안동</option>
            <option value='송정동'>송정동</option>
            <option value='시례동'>시례동</option>
            <option value='신명동'>신명동</option>
            <option value='신천동'>신천동</option>
            <option value='신현동'>신현동</option>
            <option value='양정동'>양정동</option>
            <option value='어물동'>어물동</option>
            <option value='연암동'>연암동</option>
            <option value='염포동'>염포동</option>
            <option value='정자동'>정자동</option>
            <option value='중산동'>중산동</option>
            <option value='진장동'>진장동</option>
            <option value='천곡동'>천곡동</option>
            <option value='화봉동'>화봉동</option>
            <option value='효문동'>효문동</option>
        `;
    }
    else if (citySelect.value=== '울산시' && districtSelect.value === '울주군') {
        addressselect.innerHTML = `
            <option value='두동면'>두동면</option>
            <option value='두서면'>두서면</option>
            <option value='범서읍'>범서읍</option>
            <option value='삼남읍'>삼남읍</option>
            <option value='삼동면'>삼동면</option>
            <option value='상북면'>상북면</option>
            <option value='서생면'>서생면</option>
            <option value='언양읍'>언양읍</option>
            <option value='온산읍'>온산읍</option>
            <option value='온양읍'>온양읍</option>
            <option value='웅촌면'>웅촌면</option>
            <option value='청량읍'>청량읍</option>
        `;
    }
    else if (citySelect.value=== '울산시' && districtSelect.value === '중구') {
        addressselect.innerHTML = `
            <option value='남외동'>남외동</option>
            <option value='동동'>동동</option>
            <option value='반구동'>반구동</option>
            <option value='서동'>서동</option>
            <option value='약사동'>약사동</option>
            <option value='장현동'>장현동</option>
            <option value='학성동'>학성동</option>
        `;
    }else if (citySelect.value=== '세종시' && districtSelect.value === '세종시') {
        addressselect.innerHTML = `
            <option value='가람동'>가람동</option>
            <option value='고운동'>고운동</option>
            <option value='금남면'>금남면</option>
            <option value='나성동'>나성동</option>
            <option value='누리동'>누리동</option>
            <option value='다솜동'>다솜동</option>
            <option value='다정동'>다정동</option>
            <option value='대평동'>대평동</option>
            <option value='도담동'>도담동</option>
            <option value='반곡동'>반곡동</option>
            <option value='보람동'>보람동</option>
            <option value='부강면'>부강면</option>
            <option value='산울동'>산울동</option>
            <option value='새롬동'>새롬동</option>
            <option value='세종동'>세종동</option>
            <option value='소담동'>소담동</option>
            <option value='소정면'>소정면</option>
            <option value='아름동'>아름동</option>
            <option value='어진동'>어진동</option>
            <option value='연기면'>연기면</option>
            <option value='연동면'>연동면</option>
            <option value='연서면'>연서면</option>
            <option value='용호동'>용호동</option>
            <option value='장군면'>장군면</option>
            <option value='전동면'>전동면</option>
            <option value='전의면'>전의면</option>
            <option value='조치원읍'>조치원읍</option>
            <option value='종촌동'>종촌동</option>
            <option value='집현동'>집현동</option>
            <option value='한별동'>한별동</option>
            <option value='한솔동'>한솔동</option>
            <option value='합강동'>합강동</option>
            <option value='해밀동'>해밀동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '가평군') {
        addressselect.innerHTML = `
            <option value='가평읍'>가평읍</option>
            <option value='북면'>북면</option>
            <option value='상면'>상면</option>
            <option value='설악면'>설악면</option>
            <option value='조종면'>조종면</option>
            <option value='청평면'>청평면</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '고양시 덕양구') {
        addressselect.innerHTML = `
            <option value='강매동'>강매동</option>
            <option value='고양동'>고양동</option>
            <option value='관산동'>관산동</option>
            <option value='내곡동'>내곡동</option>
            <option value='내유동'>내유동</option>
            <option value='대자동'>대자동</option>
            <option value='대장동'>대장동</option>
            <option value='덕은동'>덕은동</option>
            <option value='도내동'>도내동</option>
            <option value='동산동'>동산동</option>
            <option value='벽제동'>벽제동</option>
            <option value='북한동'>북한동</option>
            <option value='삼송동'>삼송동</option>
            <option value='선유동'>선유동</option>
            <option value='성사동'>성사동</option>
            <option value='신원동'>신원동</option>
            <option value='신평동'>신평동</option>
            <option value='오금동'>오금동</option>
            <option value='용두동'>용두동</option>
            <option value='원당동'>원당동</option>
            <option value='원흥동'>원흥동</option>
            <option value='주교동'>주교동</option>
            <option value='지축동'>지축동</option>
            <option value='토당동'>토당동</option>
            <option value='행신동'>행신동</option>
            <option value='행주내동'>행주내동</option>
            <option value='행주외동'>행주외동</option>
            <option value='향동동'>향동동</option>
            <option value='현천동'>현천동</option>
            <option value='화전동'>화전동</option>
            <option value='화정동'>화정동</option>
            <option value='효자동'>효자동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '고양시 일산동구') {
        addressselect.innerHTML = `
            <option value='마두동'>마두동</option>
            <option value='문봉동'>문봉동</option>
            <option value='백석동'>백석동</option>
            <option value='사리현동'>사리현동</option>
            <option value='산황동'>산황동</option>
            <option value='설문동'>설문동</option>
            <option value='성석동'>성석동</option>
            <option value='식사동'>식사동</option>
            <option value='장항동'>장항동</option>
            <option value='정발산동'>정발산동</option>
            <option value='중산동'>중산동</option>
            <option value='지영동'>지영동</option>
            <option value='풍동'>풍동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '고양시 일산서구') {
        addressselect.innerHTML = `
            <option value='가좌동'>가좌동</option>
            <option value='구산동'>구산동</option>
            <option value='대화동'>대화동</option>
            <option value='덕이동'>덕이동</option>
            <option value='법곳동'>법곳동</option>
            <option value='일산동'>일산동</option>
            <option value='주엽동'>주엽동</option>
            <option value='탄현동'>탄현동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '과천시') {
        addressselect.innerHTML = `
            <option value='갈현동'>갈현동</option>
            <option value='과천동'>과천동</option>
            <option value='관문동'>관문동</option>
            <option value='막계동'>막계동</option>
            <option value='문원동'>문원동</option>
            <option value='별양동'>별양동</option>
            <option value='부림동'>부림동</option>
            <option value='원문동'>원문동</option>
            <option value='주암동'>주암동</option>
            <option value='중앙동'>중앙동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '광명시') {
        addressselect.innerHTML = `
            <option value='가학동'>가학동</option>
            <option value='광명동'>광명동</option>
            <option value='노온사동'>노온사동</option>
            <option value='소하동'>소하동</option>
            <option value='옥길동'>옥길동</option>
            <option value='일직동'>일직동</option>
            <option value='철산동'>철산동</option>
            <option value='하안동'>하안동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '광주시') {
        addressselect.innerHTML = `
            <option value='경안동'>경안동</option>
            <option value='고산동'>고산동</option>
            <option value='곤지암읍'>곤지암읍</option>
            <option value='남종면'>남종면</option>
            <option value='남한산성면'>남한산성면</option>
            <option value='능평동'>능평동</option>
            <option value='도척면'>도척면</option>
            <option value='매산동'>매산동</option>
            <option value='목동'>목동</option>
            <option value='목현동'>목현동</option>
            <option value='문형동'>문형동</option>
            <option value='삼동'>삼동</option>
            <option value='송정동'>송정동</option>
            <option value='신현동'>신현동</option>
            <option value='쌍령동'>쌍령동</option>
            <option value='양벌동'>양벌동</option>
            <option value='역동'>역동</option>
            <option value='장지동'>장지동</option>
            <option value='중대동'>중대동</option>
            <option value='직동'>직동</option>
            <option value='초월읍'>초월읍</option>
            <option value='추자동'>추자동</option>
            <option value='탄벌동'>탄벌동</option>
            <option value='태전동'>태전동</option>
            <option value='퇴촌면'>퇴촌면</option>
            <option value='회덕동'>회덕동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '구리시') {
        addressselect.innerHTML = `
            <option value='갈매동'>갈매동</option>
            <option value='교문동'>교문동</option>
            <option value='사노동'>사노동</option>
            <option value='수택동'>수택동</option>
            <option value='아천동'>아천동</option>
            <option value='인창동'>인창동</option>
            <option value='토평동'>토평동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '군포시') {
        addressselect.innerHTML = `
            <option value='금정동'>금정동</option>
            <option value='당동'>당동</option>
            <option value='당정동'>당정동</option>
            <option value='대야미동'>대야미동</option>
            <option value='도마교동'>도마교동</option>
            <option value='둔대동'>둔대동</option>
            <option value='부곡동'>부곡동</option>
            <option value='산본동'>산본동</option>
            <option value='속달동'>속달동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '김포시') {
        addressselect.innerHTML = `
            <option value='감정동'>감정동</option>
            <option value='걸포동'>걸포동</option>
            <option value='고촌읍'>고촌읍</option>
            <option value='구래동'>구래동</option>
            <option value='대곶면'>대곶면</option>
            <option value='마산동'>마산동</option>
            <option value='북변동'>북변동</option>
            <option value='사우동'>사우동</option>
            <option value='양촌읍'>양촌읍</option>
            <option value='운양동'>운양동</option>
            <option value='월곶면'>월곶면</option>
            <option value='장기동'>장기동</option>
            <option value='통진읍'>통진읍</option>
            <option value='풍무동'>풍무동</option>
            <option value='하성면'>하성면</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '남양주시') {
        addressselect.innerHTML = `
            <option value='금곡동'>금곡동</option>
            <option value='다산동'>다산동</option>
            <option value='도농동'>도농동</option>
            <option value='별내동'>별내동</option>
            <option value='별내면'>별내면</option>
            <option value='삼패동'>삼패동</option>
            <option value='수동면'>수동면</option>
            <option value='수석동'>수석동</option>
            <option value='오남읍'>오남읍</option>
            <option value='와부읍'>와부읍</option>
            <option value='이패동'>이패동</option>
            <option value='일패동'>일패동</option>
            <option value='조안면'>조안면</option>
            <option value='지금동'>지금동</option>
            <option value='진건읍'>진건읍</option>
            <option value='진접읍'>진접읍</option>
            <option value='퇴계원읍'>퇴계원읍</option>
            <option value='평내동'>평내동</option>
            <option value='호평동'>호평동</option>
            <option value='화도읍'>화도읍</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '동두천시') {
        addressselect.innerHTML = `
            <option value='걸산동'>걸산동</option>
            <option value='광암동'>광암동</option>
            <option value='동두천동'>동두천동</option>
            <option value='보산동'>보산동</option>
            <option value='상봉암동'>상봉암동</option>
            <option value='상패동'>상패동</option>
            <option value='생연동'>생연동</option>
            <option value='송내동'>송내동</option>
            <option value='안흥동'>안흥동</option>
            <option value='지행동'>지행동</option>
            <option value='탑동동'>탑동동</option>
            <option value='하봉암동'>하봉암동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '부천시') {
        addressselect.innerHTML = `
            <option value='계수동'>계수동</option>
            <option value='고강동'>고강동</option>
            <option value='괴안동'>괴안동</option>
            <option value='내동'>내동</option>
            <option value='대장동'>대장동</option>
            <option value='도당동'>도당동</option>
            <option value='범박동'>범박동</option>
            <option value='삼정동'>삼정동</option>
            <option value='상동'>상동</option>
            <option value='소사동'>소사동</option>
            <option value='소사본동'>소사본동</option>
            <option value='송내동'>송내동</option>
            <option value='심곡동'>심곡동</option>
            <option value='심곡본동'>심곡본동</option>
            <option value='약대동'>약대동</option>
            <option value='여월동'>여월동</option>
            <option value='역곡동'>역곡동</option>
            <option value='오정동'>오정동</option>
            <option value='옥길동'>옥길동</option>
            <option value='원미동'>원미동</option>
            <option value='원종동'>원종동</option>
            <option value='작동'>작동</option>
            <option value='중동'>중동</option>
            <option value='춘의동'>춘의동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '성남시 분당구') {
        addressselect.innerHTML = `
            <option value='구미동'>구미동</option>
            <option value='궁내동'>궁내동</option>
            <option value='금곡동'>금곡동</option>
            <option value='대장동'>대장동</option>
            <option value='동원동'>동원동</option>
            <option value='백현동'>백현동</option>
            <option value='분당동'>분당동</option>
            <option value='삼평동'>삼평동</option>
            <option value='서현동'>서현동</option>
            <option value='석운동'>석운동</option>
            <option value='수내동'>수내동</option>
            <option value='야탑동'>야탑동</option>
            <option value='운중동'>운중동</option>
            <option value='율동'>율동</option>
            <option value='이매동'>이매동</option>
            <option value='정자동'>정자동</option>
            <option value='판교동'>판교동</option>
            <option value='하산운동'>하산운동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '성남시 수정구') {
        addressselect.innerHTML = `
            <option value='고등동'>고등동</option>
            <option value='금토동'>금토동</option>
            <option value='단대동'>단대동</option>
            <option value='둔전동'>둔전동</option>
            <option value='복정동'>복정동</option>
            <option value='사송동'>사송동</option>
            <option value='산성동'>산성동</option>
            <option value='상적동'>상적동</option>
            <option value='수진동'>수진동</option>
            <option value='시흥동'>시흥동</option>
            <option value='신촌동'>신촌동</option>
            <option value='신흥동'>신흥동</option>
            <option value='심곡동'>심곡동</option>
            <option value='양지동'>양지동</option>
            <option value='오야동'>오야동</option>
            <option value='창곡동'>창곡동</option>
            <option value='태평동'>태평동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '성남시 중원구') {
        addressselect.innerHTML = `
            <option value='갈현동'>갈현동</option>
            <option value='금광동'>금광동</option>
            <option value='도촌동'>도촌동</option>
            <option value='상대원동'>상대원동</option>
            <option value='성남동'>성남동</option>
            <option value='여수동'>여수동</option>
            <option value='은행동'>은행동</option>
            <option value='중앙동'>중앙동</option>
            <option value='하대원동'>하대원동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '수원시 권선구') {
        addressselect.innerHTML = `
            <option value='고색동'>고색동</option>
            <option value='곡반정동'>곡반정동</option>
            <option value='구운동'>구운동</option>
            <option value='권선동'>권선동</option>
            <option value='금곡동'>금곡동</option>
            <option value='당수동'>당수동</option>
            <option value='대황교동'>대황교동</option>
            <option value='서둔동'>서둔동</option>
            <option value='세류동'>세류동</option>
            <option value='오목천동'>오목천동</option>
            <option value='입북동'>입북동</option>
            <option value='장지동'>장지동</option>
            <option value='탑동'>탑동</option>
            <option value='평동'>평동</option>
            <option value='평리동'>평리동</option>
            <option value='호매실동'>호매실동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '수원시 영통구') {
        addressselect.innerHTML = `
            <option value='망포동'>망포동</option>
            <option value='매탄동'>매탄동</option>
            <option value='신동'>신동</option>
            <option value='영통동'>영통동</option>
            <option value='원천동'>원천동</option>
            <option value='이의동'>이의동</option>
            <option value='하동'>하동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '수원시 장안구') {
        addressselect.innerHTML = `
            <option value='상광교동'>상광교동</option>
            <option value='송죽동'>송죽동</option>
            <option value='연무동'>연무동</option>
            <option value='영화동'>영화동</option>
            <option value='율전동'>율전동</option>
            <option value='이목동'>이목동</option>
            <option value='정자동'>정자동</option>
            <option value='조원동'>조원동</option>
            <option value='천천동'>천천동</option>
            <option value='파장동'>파장동</option>
            <option value='하광교동'>하광교동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '수원시 팔달구') {
        addressselect.innerHTML = `
            <option value='고등동'>고등동</option>
            <option value='교동'>교동</option>
            <option value='구천동'>구천동</option>
            <option value='남수동'>남수동</option>
            <option value='남창동'>남창동</option>
            <option value='매교동'>매교동</option>
            <option value='매산로1가'>매산로1가</option>
            <option value='매산로2가'>매산로2가</option>
            <option value='매산로3가'>매산로3가</option>
            <option value='매향동'>매향동</option>
            <option value='북수동'>북수동</option>
            <option value='신풍동'>신풍동</option>
            <option value='영동'>영동</option>
            <option value='우만동'>우만동</option>
            <option value='인계동'>인계동</option>
            <option value='장안동'>장안동</option>
            <option value='중동'>중동</option>
            <option value='지동'>지동</option>
            <option value='팔달로1가'>팔달로1가</option>
            <option value='팔달로2가'>팔달로2가</option>
            <option value='팔달로3가'>팔달로3가</option>
            <option value='화서동'>화서동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '시흥시') {
        addressselect.innerHTML = `
            <option value='거모동'>거모동</option>
            <option value='계수동'>계수동</option>
            <option value='과림동'>과림동</option>
            <option value='광석동'>광석동</option>
            <option value='군자동'>군자동</option>
            <option value='금이동'>금이동</option>
            <option value='논곡동'>논곡동</option>
            <option value='능곡동'>능곡동</option>
            <option value='대야동'>대야동</option>
            <option value='도창동'>도창동</option>
            <option value='매화동'>매화동</option>
            <option value='목감동'>목감동</option>
            <option value='무지내동'>무지내동</option>
            <option value='물왕동'>물왕동</option>
            <option value='미산동'>미산동</option>
            <option value='방산동'>방산동</option>
            <option value='배곧동'>배곧동</option>
            <option value='산현동'>산현동</option>
            <option value='신천동'>신천동</option>
            <option value='안현동'>안현동</option>
            <option value='월곶동'>월곶동</option>
            <option value='은행동'>은행동</option>
            <option value='장곡동'>장곡동</option>
            <option value='장현동'>장현동</option>
            <option value='정왕동'>정왕동</option>
            <option value='조남동'>조남동</option>
            <option value='죽율동'>죽율동</option>
            <option value='포동'>포동</option>
            <option value='하상동'>하상동</option>
            <option value='하중동'>하중동</option>
            <option value='화정동'>화정동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '안산시 단원구') {
        addressselect.innerHTML = `
            <option value='고잔동'>고잔동</option>
            <option value='대부남동'>대부남동</option>
            <option value='대부동동'>대부동동</option>
            <option value='대부북동'>대부북동</option>
            <option value='목내동'>목내동</option>
            <option value='선감동'>선감동</option>
            <option value='선부동'>선부동</option>
            <option value='성곡동'>성곡동</option>
            <option value='신길동'>신길동</option>
            <option value='와동'>와동</option>
            <option value='원곡동'>원곡동</option>
            <option value='원시동'>원시동</option>
            <option value='초지동'>초지동</option>
            <option value='풍도동'>풍도동</option>
            <option value='화정동'>화정동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '안산시 상록구') {
        addressselect.innerHTML = `
            <option value='건건동'>건건동</option>
            <option value='본오동'>본오동</option>
            <option value='부곡동'>부곡동</option>
            <option value='사동'>사동</option>
            <option value='사사동'>사사동</option>
            <option value='성포동'>성포동</option>
            <option value='수암동'>수암동</option>
            <option value='양상동'>양상동</option>
            <option value='월피동'>월피동</option>
            <option value='이동'>이동</option>
            <option value='일동'>일동</option>
            <option value='장상동'>장상동</option>
            <option value='장하동'>장하동</option>
            <option value='팔곡이동'>팔곡이동</option>
            <option value='팔곡일동'>팔곡일동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '안성시') {
        addressselect.innerHTML = `
            <option value='가사동'>가사동</option>
            <option value='가현동'>가현동</option>
            <option value='계동'>계동</option>
            <option value='고삼면'>고삼면</option>
            <option value='공도읍'>공도읍</option>
            <option value='구포동'>구포동</option>
            <option value='금광면'>금광면</option>
            <option value='금산동'>금산동</option>
            <option value='금석동'>금석동</option>
            <option value='낙원동'>낙원동</option>
            <option value='당왕동'>당왕동</option>
            <option value='대덕면'>대덕면</option>
            <option value='대천동'>대천동</option>
            <option value='도기동'>도기동</option>
            <option value='동본동'>동본동</option>
            <option value='명륜동'>명륜동</option>
            <option value='미양면'>미양면</option>
            <option value='발화동'>발화동</option>
            <option value='보개면'>보개면</option>
            <option value='봉남동'>봉남동</option>
            <option value='봉산동'>봉산동</option>
            <option value='사곡동'>사곡동</option>
            <option value='삼죽면'>삼죽면</option>
            <option value='서운면'>서운면</option>
            <option value='석정동'>석정동</option>
            <option value='성남동'>성남동</option>
            <option value='숭인동'>숭인동</option>
            <option value='신건지동'>신건지동</option>
            <option value='신모산동'>신모산동</option>
            <option value='신소현동'>신소현동</option>
            <option value='신흥동'>신흥동</option>
            <option value='아양동'>아양동</option>
            <option value='양성면'>양성면</option>
            <option value='연지동'>연지동</option>
            <option value='영동'>영동</option>
            <option value='옥산동'>옥산동</option>
            <option value='옥천동'>옥천동</option>
            <option value='원곡면'>원곡면</option>
            <option value='인지동'>인지동</option>
            <option value='일죽면'>일죽면</option>
            <option value='장상동'>장상동</option>
            <option value='장하동'>장하동</option>
            <option value='중리동'>중리동</option>
            <option value='창전동'>창전동</option>
            <option value='현수동'>현수동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '안양시 동안구') {
        addressselect.innerHTML = `
            <option value='관양동'>관양동</option>
            <option value='비산동'>비산동</option>
            <option value='평촌동'>평촌동</option>
            <option value='호계동'>호계동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '안양시 만안구') {
        addressselect.innerHTML = `
            <option value='박달동'>박달동</option>
            <option value='석수동'>석수동</option>
            <option value='안양동'>안양동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '양주시') {
        addressselect.innerHTML = `
            <option value='고암동'>고암동</option>
            <option value='고읍동'>고읍동</option>
            <option value='광사동'>광사동</option>
            <option value='광적면'>광적면</option>
            <option value='남면'>남면</option>
            <option value='남방동'>남방동</option>
            <option value='덕계동'>덕계동</option>
            <option value='덕정동'>덕정동</option>
            <option value='마전동'>마전동</option>
            <option value='만송동'>만송동</option>
            <option value='백석읍'>백석읍</option>
            <option value='봉양동'>봉양동</option>
            <option value='산북동'>산북동</option>
            <option value='삼숭동'>삼숭동</option>
            <option value='어둔동'>어둔동</option>
            <option value='옥정동'>옥정동</option>
            <option value='유양동'>유양동</option>
            <option value='율정동'>율정동</option>
            <option value='은현면'>은현면</option>
            <option value='장흥면'>장흥면</option>
            <option value='회암동'>회암동</option>
            <option value='회정동'>회정동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '연천군') {
        addressselect.innerHTML = `
            <option value='군남면'>군남면</option>
            <option value='미산면'>미산면</option>
            <option value='백학면'>백학면</option>
            <option value='신서면'>신서면</option>
            <option value='연천읍'>연천읍</option>
            <option value='왕징면'>왕징면</option>
            <option value='장남면'>장남면</option>
            <option value='전곡읍'>전곡읍</option>
            <option value='중면'>중면</option>
            <option value='청산면'>청산면</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '오산시') {
        addressselect.innerHTML = `
            <option value='가수동'>가수동</option>
            <option value='가장동'>가장동</option>
            <option value='갈곶동'>갈곶동</option>
            <option value='고현동'>고현동</option>
            <option value='궐동'>궐동</option>
            <option value='금암동'>금암동</option>
            <option value='내삼미동'>내삼미동</option>
            <option value='누읍동'>누읍동</option>
            <option value='두곡동'>두곡동</option>
            <option value='벌음동'>벌음동</option>
            <option value='부산동'>부산동</option>
            <option value='서동'>서동</option>
            <option value='서랑동'>서랑동</option>
            <option value='세교동'>세교동</option>
            <option value='수청동'>수청동</option>
            <option value='양산동'>양산동</option>
            <option value='오산동'>오산동</option>
            <option value='외삼미동'>외삼미동</option>
            <option value='원동'>원동</option>
            <option value='은계동'>은계동</option>
            <option value='지곶동'>지곶동</option>
            <option value='청학동'>청학동</option>
            <option value='청호동'>청호동</option>
            <option value='탑동'>탑동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '용인시 기흥구') {
        addressselect.innerHTML = `
            <option value='고매동'>고매동</option>
            <option value='공세동'>공세동</option>
            <option value='구갈동'>구갈동</option>
            <option value='농서동'>농서동</option>
            <option value='동백동'>동백동</option>
            <option value='마북동'>마북동</option>
            <option value='보라동'>보라동</option>
            <option value='보정동'>보정동</option>
            <option value='상갈동'>상갈동</option>
            <option value='상하동'>상하동</option>
            <option value='서천동'>서천동</option>
            <option value='신갈동'>신갈동</option>
            <option value='언남동'>언남동</option>
            <option value='영덕동'>영덕동</option>
            <option value='중동'>중동</option>
            <option value='지곡동'>지곡동</option>
            <option value='청덕동'>청덕동</option>
            <option value='하갈동'>하갈동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '용인시 수지구') {
        addressselect.innerHTML = `
            <option value='고기동'>고기동</option>
            <option value='동천동'>동천동</option>
            <option value='상현동'>상현동</option>
            <option value='성복동'>성복동</option>
            <option value='신봉동'>신봉동</option>
            <option value='죽전동'>죽전동</option>
            <option value='풍덕천동'>풍덕천동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '용인시 처인구') {
        addressselect.innerHTML = `
            <option value='고림동'>고림동</option>
            <option value='김량장동'>김량장동</option>
            <option value='남동'>남동</option>
            <option value='남사읍'>남사읍</option>
            <option value='마평동'>마평동</option>
            <option value='모현읍'>모현읍</option>
            <option value='백암면'>백암면</option>
            <option value='삼가동'>삼가동</option>
            <option value='양지면'>양지면</option>
            <option value='역북동'>역북동</option>
            <option value='운학동'>운학동</option>
            <option value='원삼면'>원삼면</option>
            <option value='이동읍'>이동읍</option>
            <option value='포곡읍'>포곡읍</option>
            <option value='해곡동'>해곡동</option>
            <option value='호동'>호동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '의왕시') {
        addressselect.innerHTML = `
            <option value='고천동'>고천동</option>
            <option value='내손동'>내손동</option>
            <option value='삼동'>삼동</option>
            <option value='오전동'>오전동</option>
            <option value='왕곡동'>왕곡동</option>
            <option value='월암동'>월암동</option>
            <option value='이동'>이동</option>
            <option value='청계동'>청계동</option>
            <option value='초평동'>초평동</option>
            <option value='포일동'>포일동</option>
            <option value='학의동'>학의동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '의정부시') {
        addressselect.innerHTML = `
            <option value='가능동'>가능동</option>
            <option value='고산동'>고산동</option>
            <option value='금오동'>금오동</option>
            <option value='낙양동'>낙양동</option>
            <option value='녹양동'>녹양동</option>
            <option value='민락동'>민락동</option>
            <option value='산곡동'>산곡동</option>
            <option value='신곡동'>신곡동</option>
            <option value='용현동'>용현동</option>
            <option value='의정부동'>의정부동</option>
            <option value='자일동'>자일동</option>
            <option value='장암동'>장암동</option>
            <option value='호원동'>호원동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '이천시') {
        addressselect.innerHTML = `
            <option value='갈산동'>갈산동</option>
            <option value='고담동'>고담동</option>
            <option value='관고동'>관고동</option>
            <option value='단월동'>단월동</option>
            <option value='대월면'>대월면</option>
            <option value='대포동'>대포동</option>
            <option value='마장면'>마장면</option>
            <option value='모가면'>모가면</option>
            <option value='백사면'>백사면</option>
            <option value='부발읍'>부발읍</option>
            <option value='사음동'>사음동</option>
            <option value='설성면'>설성면</option>
            <option value='송정동'>송정동</option>
            <option value='신둔면'>신둔면</option>
            <option value='안흥동'>안흥동</option>
            <option value='율면'>율면</option>
            <option value='율현동'>율현동</option>
            <option value='장록동'>장록동</option>
            <option value='장호원읍'>장호원읍</option>
            <option value='중리동'>중리동</option>
            <option value='증일동'>증일동</option>
            <option value='증포동'>증포동</option>
            <option value='진리동'>진리동</option>
            <option value='창전동'>창전동</option>
            <option value='호법면'>호법면</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '파주시') {
        addressselect.innerHTML = `
            <option value='검산동'>검산동</option>
            <option value='광탄면'>광탄면</option>
            <option value='교하동'>교하동</option>
            <option value='군내면'>군내면</option>
            <option value='금릉동'>금릉동</option>
            <option value='금촌동'>금촌동</option>
            <option value='다율동'>다율동</option>
            <option value='당하동'>당하동</option>
            <option value='동패동'>동패동</option>
            <option value='맥금동'>맥금동</option>
            <option value='목동동'>목동동</option>
            <option value='문발동'>문발동</option>
            <option value='문산읍'>문산읍</option>
            <option value='법원읍'>법원읍</option>
            <option value='산남동'>산남동</option>
            <option value='상지석동'>상지석동</option>
            <option value='서패동'>서패동</option>
            <option value='송촌동'>송촌동</option>
            <option value='신촌동'>신촌동</option>
            <option value='아동동'>아동동</option>
            <option value='야당동'>야당동</option>
            <option value='야동동'>야동동</option>
            <option value='연다산동'>연다산동</option>
            <option value='오도동'>오도동</option>
            <option value='와동동'>와동동</option>
            <option value='월롱면'>월롱면</option>
            <option value='장단면'>장단면</option>
            <option value='적성면'>적성면</option>
            <option value='조리읍'>조리읍</option>
            <option value='진동면'>진동면</option>
            <option value='진서면'>진서면</option>
            <option value='탄현면'>탄현면</option>
            <option value='파주읍'>파주읍</option>
            <option value='파평면'>파평면</option>
            <option value='하지석동'>하지석동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '평택시') {
        addressselect.innerHTML = `
            <option value='가재동'>가재동</option>
            <option value='고덕동'>고덕동</option>
            <option value='고덕면'>고덕면</option>
            <option value='군문동'>군문동</option>
            <option value='도일동'>도일동</option>
            <option value='독곡동'>독곡동</option>
            <option value='동삭동'>동삭동</option>
            <option value='모곡동'>모곡동</option>
            <option value='비전동'>비전동</option>
            <option value='서정동'>서정동</option>
            <option value='서탄면'>서탄면</option>
            <option value='세교동'>세교동</option>
            <option value='소사동'>소사동</option>
            <option value='신대동'>신대동</option>
            <option value='신장동'>신장동</option>
            <option value='안중읍'>안중읍</option>
            <option value='오성면'>오성면</option>
            <option value='용이동'>용이동</option>
            <option value='월곡동'>월곡동</option>
            <option value='유천동'>유천동</option>
            <option value='이충동'>이충동</option>
            <option value='장당동'>장당동</option>
            <option value='장안동'>장안동</option>
            <option value='죽백동'>죽백동</option>
            <option value='지산동'>지산동</option>
            <option value='지제동'>지제동</option>
            <option value='진위면'>진위면</option>
            <option value='청룡동'>청룡동</option>
            <option value='청북읍'>청북읍</option>
            <option value='칠괴동'>칠괴동</option>
            <option value='칠원동'>칠원동</option>
            <option value='통복동'>통복동</option>
            <option value='평택동'>평택동</option>
            <option value='포승읍'>포승읍</option>
            <option value='합정동'>합정동</option>
            <option value='현덕면'>현덕면</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '포천시') {
        addressselect.innerHTML = `
            <option value='가산면'>가산면</option>
            <option value='관인면'>관인면</option>
            <option value='군내면'>군내면</option>
            <option value='내촌면'>내촌면</option>
            <option value='동교동'>동교동</option>
            <option value='선단동'>선단동</option>
            <option value='설운동'>설운동</option>
            <option value='소흘읍'>소흘읍</option>
            <option value='신북면'>신북면</option>
            <option value='신읍동'>신읍동</option>
            <option value='어룡동'>어룡동</option>
            <option value='영북면'>영북면</option>
            <option value='영중면'>영중면</option>
            <option value='이동면'>이동면</option>
            <option value='일동면'>일동면</option>
            <option value='자작동'>자작동</option>
            <option value='창수면'>창수면</option>
            <option value='화현면'>화현면</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '하남시') {
        addressselect.innerHTML = `
            <option value='감북동'>감북동</option>
            <option value='감이동'>감이동</option>
            <option value='감일동'>감일동</option>
            <option value='광암동'>광암동</option>
            <option value='교산동'>교산동</option>
            <option value='당정동'>당정동</option>
            <option value='덕풍동'>덕풍동</option>
            <option value='망월동'>망월동</option>
            <option value='미사동'>미사동</option>
            <option value='배알미동'>배알미동</option>
            <option value='상사창동'>상사창동</option>
            <option value='상산곡동'>상산곡동</option>
            <option value='선동'>선동</option>
            <option value='신장동'>신장동</option>
            <option value='창우동'>창우동</option>
            <option value='천현동'>천현동</option>
            <option value='초이동'>초이동</option>
            <option value='초일동'>초일동</option>
            <option value='춘궁동'>춘궁동</option>
            <option value='풍산동'>풍산동</option>
            <option value='하사창동'>하사창동</option>
            <option value='하산곡동'>하산곡동</option>
            <option value='학암동'>학암동</option>
            <option value='항동'>항동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '화성시') {
        addressselect.innerHTML = `
            <option value='금곡동'>금곡동</option>
            <option value='기산동'>기산동</option>
            <option value='기안동'>기안동</option>
            <option value='남양읍'>남양읍</option>
            <option value='능동'>능동</option>
            <option value='마도면'>마도면</option>
            <option value='매송면'>매송면</option>
            <option value='목동'>목동</option>
            <option value='반송동'>반송동</option>
            <option value='반월동'>반월동</option>
            <option value='반정동'>반정동</option>
            <option value='방교동'>방교동</option>
            <option value='배양동'>배양동</option>
            <option value='병점동'>병점동</option>
            <option value='봉담읍'>봉담읍</option>
            <option value='비봉면'>비봉면</option>
            <option value='산척동'>산척동</option>
            <option value='새솔동'>새솔동</option>
            <option value='서신면'>서신면</option>
            <option value='석우동'>석우동</option>
            <option value='송동'>송동</option>
            <option value='송산동'>송산동</option>
            <option value='송산면'>송산면</option>
            <option value='신동'>신동</option>
            <option value='안녕동'>안녕동</option>
            <option value='양감면'>양감면</option>
            <option value='영천동'>영천동</option>
            <option value='오산동'>오산동</option>
            <option value='우정읍'>우정읍</option>
            <option value='장안면'>장안면</option>
            <option value='장지동'>장지동</option>
            <option value='정남면'>정남면</option>
            <option value='중동'>중동</option>
            <option value='진안동'>진안동</option>
            <option value='청계동'>청계동</option>
            <option value='팔탄면'>팔탄면</option>
            <option value='향남읍'>향남읍</option>
            <option value='황계동'>황계동</option>
        `;
    }



    // 다른 구에 대한 조건문을 추가로 작성해 주세요.
});

// // "검색" 버튼 클릭 시 주소 검색 수행
// const searchBtn = document.getElementById("searchBtn");
// searchBtn.addEventListener("click", function() {
//     const city = citySelect.value;
//     const district = districtSelect.value;
//     const address = document.getElementById("address").value;
//
//     const result = city + " " + district + " " + address
//     console.log(result)
//
// })

// 주소 검색을 수행하는 코드를 추가해 주세요
// 예: window.location.href = `/search?city=${city}&district=${district}`;
