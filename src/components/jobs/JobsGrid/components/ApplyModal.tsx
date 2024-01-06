import { memo, useCallback, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Typography,
  Upload,
  message,
} from "antd";
import {
  FileAddOutlined,
  FileOutlined,
  UploadOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { IJobs } from "@/redux/slices/authorization/authorizationSlice";
import { upload } from "@/utils/upload";

const ApplyModal = ({
  data,
  open,
  onOpen,
}: {
  data: IJobs;
  open: boolean;
  onOpen: any;
}) => {
  const [form] = Form.useForm();
  const [temporaryFile, setTemporaryFile] = useState<any>();
  const [uploading, setUploading] = useState<boolean>(false);

  const cancel = useCallback(() => {
    form.resetFields();
    onOpen(false);
  }, [form, onOpen]);

  const beforeUpload = useCallback((file: any) => {
    setTemporaryFile(file);
  }, []);

  const handleFinish = useCallback(
    async (formData: any) => {
      setUploading(true);
      try {
        if (temporaryFile) {
          const resp = await upload(temporaryFile);
          console.log(resp);
        } else {
          message.error("Vui lòng chọn file ứng tuyển");
        }
      } catch (error) {
        message.error("Yêu cầu tạm thời không xử lý được");
      }
      setUploading(false);
    },
    [temporaryFile]
  );

  return (
    <Modal
      styles={{
        header: {
          borderBottom: "1px solid #eee",
          marginBottom: "16px",
          paddingBottom: "14px",
        },
      }}
      title={
        <Typography.Text style={{ fontSize: "18px", fontWeight: 600 }}>
          Ứng tuyển{" "}
          <Typography.Text style={{ color: "#007456", fontSize: "18px" }}>
            {data.name}
          </Typography.Text>
        </Typography.Text>
      }
      open={open}
      footer={
        <Row gutter={{ lg: 16 }}>
          <Col lg={{ span: 4 }}>
            <Button block onClick={cancel}>
              Hủy
            </Button>
          </Col>
          <Col lg={{ span: 20 }}>
            <Button
              type="primary"
              block
              onClick={() => form.submit()}
              loading={uploading}
            >
              Nộp hồ sơ ứng tuyển
            </Button>
          </Col>
        </Row>
      }
      onCancel={cancel}
    >
      <Form
        name="apply"
        form={form}
        layout="vertical"
        requiredMark="optional"
        autoComplete="off"
        onFinish={handleFinish}
      >
        <Row>
          <Col lg={{ span: 24 }}>
            <Form.Item
              style={{ marginBottom: "16px" }}
              label={
                <Space align="center">
                  <FileAddOutlined style={{ fontSize: "20px" }} />
                  <Typography.Text className="text-default">
                    Chọn CV để ứng tuyển
                  </Typography.Text>
                </Space>
              }
              required
            >
              <Upload
                accept=".pdf, .doc, .docx, .png"
                beforeUpload={beforeUpload}
              >
                <Button icon={<UploadOutlined />} block>
                  Click to Upload
                </Button>
              </Upload>
            </Form.Item>
          </Col>
          {temporaryFile ? (
            <Col lg={{ span: 24 }}>
              <Space align="center" style={{ marginBottom: "20px" }}>
                <FileOutlined />
                <Typography.Text>{temporaryFile.name}</Typography.Text>
              </Space>
            </Col>
          ) : (
            false
          )}
        </Row>
        <Row>
          <Col lg={{ span: 24 }}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[
                { type: "email", message: "Nhập đúng định dạng email" },
                { required: true, message: "Email không được để trống" },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 24 }}>
            <Form.Item
              label="Họ tên"
              name="fullname"
              required
              rules={[
                { required: true, message: "Họ tên không được để trống" },
              ]}
            >
              <Input placeholder="Họ tên" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 24 }}>
            <Card
              style={{ paddingBottom: "10px" }}
              title={
                <Space align="center">
                  <WarningOutlined
                    style={{ fontSize: "20px", color: "#d83324" }}
                  />
                  <Typography.Text
                    style={{ color: "#d83324", fontSize: "16px" }}
                  >
                    Lưu ý:
                  </Typography.Text>
                </Space>
              }
            >
              <Typography.Text>
                1. MyJob khuyên tất cả các bạn hãy luôn cẩn trọng trong quá
                trình tìm việc và chủ động nghiên cứu về thông tin công ty, vị
                trí việc làm trước khi ứng tuyển. Ứng viên cần có trách nhiệm
                với hành vi ứng tuyển của mình. Nếu bạn gặp phải tin tuyển dụng
                hoặc nhận được liên lạc đáng ngờ của nhà tuyển dụng, hãy báo cáo
                ngay cho MyJob qua email{" "}
                <Typography.Text style={{ color: "#007456" }}>
                  info.myjob.contact@gmail.com
                </Typography.Text>{" "}
                để được hỗ trợ kịp thời.
              </Typography.Text>
              <Typography.Text style={{ display: "block", marginTop: "12px" }}>
                2. Tìm hiểu thêm kinh nghiệm phòng tránh lừa đảo
              </Typography.Text>
            </Card>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default memo(ApplyModal);
