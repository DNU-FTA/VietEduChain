# DNU-FTA-VietEduChain

## TỔNG QUAN

DUN-FTA-VietEduChain là một dự án blockchain layer 1 được xây dựng trên nền tảng Cosmos SDK, như là một giải pháp góp phần đổi mới phương thức quản lý chất lượng đào tạo đại học, giảm thiểu quy trình và thủ tục hành chính liên quan đến việc cấp và xác nhận bằng cấp, chứng chỉ tại Việt Nam. Thông qua các ứng dụng phi tập trung và hợp đồng thông minh, dự án nhằm nâng cao tính minh bạch, bảo mật và hiệu quả trong các hoạt động tuyển sinh, đào tạo và quản lý chất lượng đào tạo, bao gồm cấp bằng và chứng chỉ, quản lý danh tính (các trường đại học, chương trình đào tạo, các cá nhân (cán bộ, giảng viên và sinh viên), bằng và chứng chỉ, v.v...), xử lý thanh toán, đảm bảo tính toàn vẹn và liêm chính trong nghiên cứu khoa học, sự minh bạch và tuân thủ của các trường đại học đối với các quy định của Bộ Giáo dục và Đào tạo Việt Nam như quy chế tuyển sinh và đào tạo, cũng như các quy định về đảm bảo cơ sở vật chất phục vụ quá trình đào tạo.

## MỤC TIÊU VÀ PHẠM VI DỰ ÁN

### Mục tiêu tổng quát

1. Xây dựng DNU-FTA-VietEduChain Layer-1 chuyên biệt cho giáo dục đại học của Việt Nam, đáp ứng đồng thời ba trụ cột: (1) Hiệu năng cấp hạ tầng; (2) thông lượng ≥ 30.000 giao dịch/giây; (3) thời gian hoàn tất ("finality") ≈ 1,2 giây; phí giao dịch < 0,1% giá trị.
2. Chuẩn dữ liệu quốc tế: hỗ trợ đầy đủ Verifiable Credential (VC) và Decentralized Identifier (DID) theo khuyến nghị W3C; sẵn sàng liên thông qua Inter-Blockchain Communication (IBC).
3. Hõ trợ quản lý và giám sát toàn bộ chu trình đào tạo từ tuyển sinh, đăng ký học tập và quá trình đào tạo, nộp học phí, cấp văn bằng chứng chỉ, đến lưu vết hoạt động nghiên cứu khoa học để bảo đảm sự tuân thủ các quy định về đào tạo, minh bạch, an toàn dữ liệu và khả năng mở rộng, phát triển trong dài hạn.

## TÍNH NĂNG

### Backend (BE)

- **Lớp Core**: Xây dựng trên đồng thuận HotStuff, DAG mempool và CosmWasm để đảm bảo khả năng mở rộng và hiệu suất.
- **Module Chức Năng**: Bao gồm EduAdmission, EduPay, EduStudy, EduCert, ReserchLedger and EduID để phục vụ các quy trình khác nhau trong chu trình đào tạo của các trường.
- **API & SDK**: REST/gRPC và GraphQL API, cùng với JS/Flutter SDK để dễ dàng tích hợp.
- **Khả Năng Tương Tác**: IBC relay và khả năng cross-chain để kết nối với các blockchain khác.
- **Công Cụ Giám Sát**: Prometheus và Grafana để minh bạch dữ liệu thời gian thực và theo dõi KPI.
- **Tuân Thủ Pháp Lý**: Tuân thủ các tiêu chuẩn PDPA Việt Nam 2023 và GDPR về bảo vệ dữ liệu.

### Frontend (FE)

- **Giao diện người dùng hiện đại**: Xây dựng trên React và Next.js với thiết kế đáp ứng cho các thiết bị khác nhau.
- **Các module tương tác**: Giao diện người dùng cho tất cả các module blockchain (EduAdmission, EduPay, EduStudy, EduCert, ResearchLedger, EduID).
- **Tích hợp API**: Tương tác với backend thông qua các API RESTful được chuẩn hóa theo Cosmos SDK.
- **Xác thực và phân quyền**: Hỗ trợ đăng nhập, quản lý phiên và phân quyền người dùng.
- **Quản lý trạng thái**: Sử dụng React Context và các provider để quản lý trạng thái ứng dụng.
- **Đa ngôn ngữ**: Hỗ trợ tiếng Việt và tiếng Anh cho tất cả các giao diện.

## SMART CONTRACTS

Dự án bao gồm các hợp đồng thông minh sau:

1. **EduAdmission**: Quản lý quá trình tuyển sinh của các cơ sở đào tạo, giám sát việc thực hiện chỉ tiêu và đảm bảo tiêu chuẩn tuyển sinh.
2. **EduPay**: Quản lý việc đăng ký học tập và thanh toán học phí của sinh viên cho cơ sở đào tạo.
3. **EduStudy**: Quản lý quá trình học tập và rèn luyện của sinh viên, đảm bảo sinh viên hoàn thành chương trình đào tạo, đánh giá kết quả học tập và sự tham gia các hoạt động ngoại khóa của sinh viên trong quá trình đào tạo tại trường đại học.
4. **EduCert**: Quản lý văn bằng tốt nghiệp và chứng chỉ: xử lý việc cấp, xác minh và thu hồi bằng tốt nghiệp cũng như đối với chứng chỉ các khóa đào tạo ngắn hạn.
5. **ResearchLedger**: Ghi chép và xác minh những đóng góp nghiên cứu khoa học và xuất bản của cán bộ, giảng viên và sinh viên, góp phần đảm bảo tính liêm chính trong hoạt động nghiên cứu khoa học và công nghệ.
6. **EduID**: Xác minh danh tính của trường đại học và các chủ thể, văn bằng, chứng chỉ, tài nguyên trí tuệ, v.v... dựa trên hệ thống nhận dạng phi tập trung (DID) hỗ trợ quá trình quản lý, giám sát và tiết kiệm chi phí, thủ tục hành chính liên quan đến xác nhận, đồng thười giảm thiểu sự giả mạo về kết quả đào tạo.

## BẮT ĐẦU

### Yêu cầu hệ thống

- Rust (phiên bản 1.70.0 trở lên)
- Go (phiên bản 1.20 trở lên)
- Docker và Docker Compose
- wasm32-unknown-unknown target cho Rust (`rustup target add wasm32-unknown-unknown`)
- Node.js (phiên bản 18 trở lên) cho Frontend

### Cài đặt môi trường phát triển

1. Clone repository:

```bash
git clone https://github.com/yourusername/viet-educhain.git
cd viet-educhain
```

2. Khởi động node blockchain:

```bash
cd be/educhain/deployments/devnet
./run_wasmd_node.sh
```

3. Build các smart contract:

```bash
cd be/educhain/deployments/scripts
./build_educhain_contracts.sh
```

4. Deploy các smart contract lên blockchain:

```bash
cd be/educhain/deployments/scripts
./deploy_educhain_contracts.sh
```
### Video hướng dẫn
Bạn có thể xem video hướng dẫn trực tiếp dưới đây:

[![Hướng dẫn DNU-FTA-VietEduChain](https://img.youtube.com/vi/McM8y8Zghsg/0.jpg)](https://youtu.be/McM8y8Zghsg)

> Nhấn vào hình để xem video hướng dẫn trên YouTube.

> Nếu xem trên GitHub, có thể iframe

> Nếu xem trên GitHub, có thể iframe sẽ không hiển thị. Vui lòng truy cập trực tiếp: [https://youtu.be/McM8y8Zghsg](https://youtu.be/McM8y8Zghsg)

5. Chạy frontend:

```bash
cd fe
npm install
npm run dev
```

### Triển khai lên server

Khi triển khai lên môi trường server, hãy tuân thủ chính xác các bước sau theo thứ tự:

1. Clone code repository:

```bash
git clone https://github.com/yourusername/viet-educhain.git
cd viet-educhain
```

2. Khởi tạo và chạy blockchain node:

```bash
cd be/educhain/deployments/devnet
./run_wasmd_node.sh
```

3. Build tất cả các smart contract:

```bash
cd be/educhain/deployments/scripts
./build_educhain_contracts.sh
```

4. Deploy các smart contract lên blockchain:

```bash
cd be/educhain/deployments/scripts
./deploy_educhain_contracts.sh
```

5. Cập nhật địa chỉ contract trong cấu hình ứng dụng:

```bash
# Địa chỉ contract sẽ được lưu trong các file sau khi deploy
cat be/educhain/deployments/devnet/data/eduadmission_address.txt
cat be/educhain/deployments/devnet/data/edupay_address.txt
cat be/educhain/deployments/devnet/data/edustudy_address.txt
cat be/educhain/deployments/devnet/data/educert_address.txt
cat be/educhain/deployments/devnet/data/researchledger_address.txt
cat be/educhain/deployments/devnet/data/eduid_address.txt


6. Cấu hình và khởi chạy frontend:

```bash
cd fe
npm install
npm run build
npm run start
```

**Lưu ý quan trọng**: Môi trường server sẽ không tự động đồng bộ hóa với môi trường phát triển riêng của bạn (người phát triển hệ thống). Dữ liệu blockchain, trạng thái tài khoản và tương tác hợp đồng từ môi trường phát triển riêng của bạn sẽ không có trên server. Mỗi lần triển khai tạo ra một phiên bản blockchain mới với trạng thái ban đầu.

### Tương tác với Contracts

Sau khi triển khai, bạn có thể tương tác với các hợp đồng thông minh bằng các script được cung cấp:

```bash
cd be/educhain/deployments/scripts
./interact_with_contracts.sh <contract_name> <function_name> <parameters>
```

## THÔNG TIN KÍCH THƯỚC CONTRACT

Kích thước contract đã biên dịch hiện tại:

- **eduadmission**: 165,948 bytes
- **eduPay**: 149,759 bytes
- **EduStudy**: ??? bytes
- **eduCert**: 226,859 bytes
- **researchledger**: 158,669 bytes
- **eduid**: 155,441 bytes

## XỬ LÝ SỰ CỐ

Nếu bạn gặp sự cố khi build các smart contract, bạn có thể thử phương pháp build thủ công:

```bash
cd be/educhain/deployments/scripts
./manual_build_contracts.sh
```

Nếu bạn gặp vấn đề với frontend, hãy thử:

```bash
cd fe
npm clean-install
npm run dev
```

## CÁC Ý KIẾN ĐÓNG GÓP HOÀN THIỆN

Chúng tôi hoan nghênh tất cả những ý kiến đóng góp bổ sung và hoàn thiện! Vui lòng gửi pull request hoặc mở issue cho bất kỳ sự hoàn thiện, nâng cấp hoặc sửa lỗi.

## GIẤY PHÉP

Dự án này được cấp phép theo Giấy phép MIT. Xem file LICENSE để biết chi tiết.

## CHI TIẾT CÁC MODULE

### EduAdmission

Module quản lý tuyển sinh theo quy định của Bộ Giáo dục và Đào tạo:
- Đăng ký chỉ tiêu tuyển sinh của cơ sở đào tạo.
- Xác nhận kết quả đăng ký chỉ tiêu tuyển sinh của cơ sở đào tạo. 
- Công bố điểm và kết quả tuyển sinh vào ngành học theo các nguyện vọng đăng ký.
- Xác thực quy trình và kết quả tuyển sinh của cơ sở đào tạo.

### Ảnh minh họa

![Ảnh minh họa hệ thống DNU-FTA-VietEduChain](screenshot/eduadmision.png)
![Ảnh minh họa thêm mới chỉ tiêu tuyển sinh](screenshot/eduaddmissionquota.png)

Ảnh trên minh họa giao diện thêm mới chỉ tiêu tuyển sinh cho một cơ sở đào tạo. Người dùng có thể nhập thông tin về ngành học, số lượng chỉ tiêu, năm tuyển sinh và các tiêu chí liên quan. Giao diện này giúp đảm bảo quy trình đăng ký chỉ tiêu minh bạch, dễ kiểm soát và tuân thủ quy định của Bộ Giáo dục và Đào tạo.

### EduPay

Module thanh toán học phí và học bổng:
- Tạo escrow thanh toán học phí
- Xác nhận đăng ký học
- Xác nhận nộp học phí cho trường
- Quản lý thực hiện chính sách học bổng, khuyến khích học tập


### EduStudy

Module quản lý quá trình học tập và rèn luyện của sinh viên:
- Đánh giá quá trình học tập và kết quả học tập của sinh viên
- Đánh giá sự hoàn thành chương trình đào tạo theo ngành và chuyên ngành
- Đáng giá kết quả rèn luyện và tham gia các hoạt động ngoại khóa của sinh viên

### EduCert

Module quản lý văn bằng điện tử, hỗ trợ:
- Cấp văn bằng mới
- Xác minh tính chính xác của văn bằng
- Chia sẻ văn bằng với bên thứ ba
- Kiểm tra lịch sử thay đổi

### ResearchLedger

Module quản lý nghiên cứu khoa học:
- Đăng ký nghiên cứu mới
- Lưu trữ hash của tài liệu nghiên cứu
- Kiểm tra trùng lặp và đạo văn
- Quản lý quyền sở hữu trí tuệ

### EduID

Module quản lý danh tính dựa trên DID (Decentralized Identifiers), cho phép:
- Tạo danh tính số mới
- Truy vấn thông tin danh tính
- Cập nhật thông tin danh tính
- Xác thực danh tính

#### Ảnh minh họa thêm mới EduID

![Ảnh minh họa thêm mới EduID](screenshot/eduid_add.png)

#### Ảnh minh họa danh sách EduID

![Ảnh minh họa danh sách EduID](screenshot/eduid_list.png)

Ảnh trên minh họa giao diện danh sách các danh tính số (EduID) đã được tạo trên hệ thống. Mỗi mục trong danh sách thể hiện thông tin cơ bản của một EduID như mã định danh, tên chủ sở hữu, trạng thái xác thực và các thao tác quản lý (xem chi tiết, chỉnh sửa, xác thực hoặc thu hồi). Giao diện này giúp quản trị viên hoặc người dùng dễ dàng tra cứu, kiểm tra và quản lý các danh tính số trong môi trường giáo dục đại học, đảm bảo tính minh bạch và an toàn dữ liệu cá nhân.
