import RNFetchBlob from 'rn-fetch-blob'

export default class ImageGenerateService {
  async generate(input) {
    inputParams = this.inputToParams(input);
    try {
      return this.makeRequest(inputParams);
    } catch (err) {
      throw err;
    }
  }

  inputToParams(input) {
    return {
      body: {
        text: input.bodyText,
        size: input.bodyFontSize,
        align: input.bodyAlign,
        color: "0"
      }, footer: {
        text: input.footerText,
        size: input.footerFontSize,
        align: input.footerAlign,
        color: "0"
      }
    }
  }

  async makeRequest(inputParams) {
    const res = await RNFetchBlob
      .config({
        path: RNFetchBlob.fs.dirs.DocumentDir + '/InPoster/' + Date.now() + '.png'
      })
      .fetch('POST', 'https://us-central1-inposter.cloudfunctions.net/generate', {
        'Content-Type': 'application/json',
      }, JSON.stringify(inputParams));
    return this.handleResponse(res);
  }

  handleResponse(res) {
    let statusCode = res.info().status;
    if (statusCode == 200) {
      return res.path();
    } else {
      throw new Error(`Bad Request ${statusCode}`)
    }
  }
}