import react from "react";
import "./header.scss";
import { PrinterOutlined, CloudDownloadOutlined } from "@ant-design/icons";

const print_download = () => (
  <>
    <span>
      <PrinterOutlined size={10} className="print-icon" />
    </span>
    <span>
      <CloudDownloadOutlined size={10} className="download-icon" />
    </span>
  </>
);

export default print_download;
