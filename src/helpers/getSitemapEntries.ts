import { getSiteURL } from "../constant/getSiteURL";
import { isBrowser } from "./isBrowser";
import { formatUrlNormalNameCase } from "./formatNormalCase";

function xml2json(xml) {
  let obj = {};
  if (xml.nodeType === 1) {
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (let j = 0; j < xml.attributes.length; j++) {
        const attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) {
    obj = xml.nodeValue;
  }
  if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i++) {
      let item = xml.childNodes.item(i);
      let nodeName = item.nodeName;
      if (typeof obj[nodeName] === "undefined") {
        obj[nodeName] = xml2json(item);
      } else {
        if (typeof obj[nodeName].push === "undefined") {
          let old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xml2json(item));
      }
    }
  }
  return obj;
}

function getWorkableArrayOfUrls(sitemapEntries) {
  return sitemapEntries.then(data => {
    const workableLists = data.urlset.url.map(({ loc }) => {
      const url = loc["#text"];
      if (!url.includes("/en/") && !url.includes("/de/")) {
        if (!url.includes("/en") && !url.includes("/de")) {
          if (url.split("/").length === 5) {
            return url.split("/").splice(3, 4);
          }
        }
      }
    });
    return workableLists.filter(Boolean);
  });
}

async function getFormattedSitemapListObject(sitemapEntries) {
  const workableArray = getWorkableArrayOfUrls(sitemapEntries);
  let nentriesObj = workableArray.then(allUrls => {
    let entriesObj = [];
    return allUrls.map(splittedUrls => {
      splittedUrls.map((url, index, arrayUrl) => {
        if (index === 0) {
          if (!entriesObj.filter(entryObj => entryObj.path === url).length) {
            let parentName = formatUrlNormalNameCase(url);
            entriesObj.push({ name: parentName, path: url, children: [] });
          }
        }
        if (index === 1) {
          entriesObj.forEach(entry => {
            if (entry.path === arrayUrl[0]) {
              let childrenName = formatUrlNormalNameCase(url);
              entry.children.push({ name: childrenName, path: url });
            }
          });
        }
      });
      return entriesObj;
    })[0];
  });
  return await nentriesObj;
}

export const getSitemapEntries = () => {
  let dataFromXML = null;
  let entriesObj = null;
  if (isBrowser) {
    dataFromXML = fetch(`${getSiteURL()}/sitemap.xml`)
      .then(response => response.text())
      .then(str => isBrowser() && new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        return xml2json(data);
      });
    entriesObj = getFormattedSitemapListObject(dataFromXML);
  }

  return entriesObj;
};
