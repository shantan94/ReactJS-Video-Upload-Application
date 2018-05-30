import React, { Component } from "react";
// import axios from 'axios';
import { Progress } from "reactstrap";
import cfsign from "aws-cloudfront-sign";
import {
  AWSConfig,
  s3,
  cdnEndpoint,
  cdnAccessKeyId,
  cdnPrivateKeyString
} from "../awsConfig";

class VideoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", filename: "", filetype: "", url: "", complete: 0 };
    this.changeValue = this.changeValue.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.toggle) this.props.parentprops.history.push("/upload");
  }

  uploadVideo = event => {
    event.preventDefault();
    var file = this.state.file;
    var filename = this.state.filename;
    var filetype = this.state.filetype;
    var reader = new FileReader();
    reader.onload = event => {
      this.setState({
        file: reader.result,
        filename: filename,
        filetype: filetype,
        complete: 0
      });
    };
    reader.onprogress = event => {
      var progress = parseInt(event.loaded / event.total * 50, 10);
      this.setState({ complete: progress });
    };
    reader.onloadend = event => {
      this.setState({ complete: 50 });
      const params = {
        Bucket: AWSConfig.bucket,
        Key: "video/" + filename,
        Body: file,
        ACL: " public-read",
        ContentType: filetype
      };
      s3
        .upload(params)
        .on("httpUploadProgress", evt => {
          let current = parseInt(evt.loaded * 50 / evt.total, 10) + 50;
          this.setState({ complete: current });
        })
        .send((err, data) => {
          this.setState({ complete: 100 });
          let signingParams = {
            keypairId: cdnAccessKeyId,
            privateKeyString: cdnPrivateKeyString
          };
          let signedUrl = cfsign.getSignedUrl(
            cdnEndpoint + "video/" + this.state.filename,
            signingParams
          );
          this.setState({ url: signedUrl });
        });
    };
    reader.readAsArrayBuffer(file);
    // axios.post(
    //           'http://localhost:8080/upload', {
    //           headers: {
    //               'Content-Type': 'multipart/form-data'
    //           }, body: {
    //               'file': this.state.file,
    //               'filename': this.state.filename
    //           }
    //       });
  };

  changeValue(event) {
    console.log(event.target.files[0].name);
    this.setState({
      file: event.target.files[0],
      filename: event.target.files[0].name,
      filetype: event.target.files[0].type
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Upload a video</h1>
        <hr />
        <form onSubmit={this.uploadVideo}>
          <input type="file" onChange={this.changeValue} accept="video/*" />
          <br />
          <br />
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </form>
        <br />
        <Progress animated value={this.state.complete}>
          {this.state.complete}%
        </Progress>
        <br />
        {this.state.url ? (
          <video
            id="clip"
            src={this.state.url}
            controls
            autoPlay
            width="640"
            height="264"
          />
        ) : null}
      </div>
    );
  }
}

export default VideoUpload;
