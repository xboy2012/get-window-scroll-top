function getPageYOffset() {
  return window.pageYOffset;
}

function getBodyScrollTop () {
  return document.body.scrollTop;
}

function getDocumentElementScrollTop() {
  return document.documentElement.scrollTop;
}

function getScrollTopAuto() {
  if (typeof window === 'undefined') {
    return 0;
  }
  const pageYOffset = getPageYOffset();
  if (pageYOffset) {
    // window.pageYOffset has a proper value,
    // thus future invoke use getPageYOffset();
    _getScrollTop = getPageYOffset;
    return pageYOffset;
  }
  if (typeof document === 'undefined') {
    return 0;
  }
  if (document.body) {
    const bodyScrollTop = getBodyScrollTop();
    if (bodyScrollTop) {
      // document.body.scrollTop has a proper value,
      // thus future invoke use getBodyScrollTop();
      _getScrollTop = getBodyScrollTop;
      return bodyScrollTop;
    }
  }
  if (document.documentElement) {
    const documentElementScrollTop = getDocumentElementScrollTop();
    if (documentElementScrollTop) {
      // document.documentElement.scrollTop has a proper value,
      // thus future invoke use getDocumentElementScrollTop();
      _getScrollTop = getDocumentElementScrollTop;
      return documentElementScrollTop;
    }
  }
  return 0;
}

let _getScrollTop = getScrollTopAuto;

const getScrollTop = () => {
  return _getScrollTop();
}

export default getScrollTop;
