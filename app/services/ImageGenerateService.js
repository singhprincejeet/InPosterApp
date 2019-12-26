import RNFetchBlob from 'rn-fetch-blob'

export default class ImageGenerateService {
  async generate(input, imageUri) {
    let inputParams = this.inputToParams(input);
    try {
      return this.makeRequest(inputParams, imageUri);
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
        color: input.textColor,
      }, footer: {
        text: input.footerText,
        size: input.footerFontSize,
        align: input.footerAlign,
        color: input.textColor,
      },
    }
  }

  async makeRequest(inputParams, imageUri) {
    let requestForm = this.geneateRequestForm(inputParams, imageUri);
    const res = await RNFetchBlob
      .config({
        path: RNFetchBlob.fs.dirs.DocumentDir + '/InPoster/' + Date.now() + '.png'
      })
      .fetch('POST', 'https://us-central1-inposter.cloudfunctions.net/generate', {
        'Content-Type': 'multipart/form-data',
      },
        requestForm
      );
    return this.handleResponse(res);
  }

  handleResponse(res) {
    let statusCode = res.info().status;
    if (statusCode == 200) return res.path();
    throw new Error(`Bad Request ${statusCode}`)
  }

  geneateRequestForm(inputParams, imageUri) {
    let requestForm = [{
      name: 'info',
      data: JSON.stringify(inputParams),
    }];
    if (imageUri) this.addImageToRequestForm(requestForm, imageUri);
    return requestForm;
  }

  addImageToRequestForm(requestForm, imageUri) {
    requestForm.push({
      name: 'image',
      filename: 'image.png',
      data: RNFetchBlob.wrap(imageUri)
    });
  }
}