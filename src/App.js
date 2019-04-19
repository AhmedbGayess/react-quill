import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class RichEditor extends React.Component {
  state = { text: "" };

  handleChange = (value) => {
    this.setState({ text: value });
  };

  render() {
    return (
      <div style={{ width: "50%", margin: "50px auto" }}>
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange}
          modules={RichEditor.modules}
          formats={RichEditor.formats}
        />
      </div>
    );
  }
}

RichEditor.modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ font: [] }],
    [{ align: [] }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }],
    [{ direction: "rtl" }],
    ["blockquote"],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    matchVisual: false
  }
};

RichEditor.formats = [
  "header",
  "font",
  "align",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color"
];

export default RichEditor;
