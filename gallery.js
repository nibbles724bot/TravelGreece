'use strict';

// Photographs are stored locally; the catalog retains each original source and license.
const dayPhotoKeys = [
  'plaka', 'acropolis', 'agora', 'delphi', 'meteora', 'meteora', 'piraeus',
  'portara', 'naxos-town', 'halki', 'agios-prokopios', 'fira', 'oia',
  'imerovigli', 'pyrgos', 'plaka', 'museum', 'garden', 'acropolis'
];
const photoDialog = document.getElementById('photo-dialog');
let photoOpener;
let savedPageOverflow = '';

function photoLink(text, href) {
  const link = document.createElement('a');
  link.textContent = text;
  link.href = href;
  link.target = '_blank';
  link.rel = 'noopener';
  return link;
}

function photoAttribution(photo) {
  const fragment = document.createDocumentFragment();
  fragment.append('照片：', photoLink(photo.author, photo.sourceUrl), ' · ',
    photoLink(photo.license, photo.licenseUrl), ' · 已縮圖壓縮');
  return fragment;
}

function openPhoto(key, opener) {
  const photo = tripPhotos[key];
  if (!photo) return;
  photoOpener = opener;
  const image = document.getElementById('photo-full');
  image.width = photo.width || 1000;
  image.height = photo.height || 667;
  image.src = photo.src;
  image.alt = photo.alt;
  document.getElementById('photo-title').textContent = photo.title;
  document.getElementById('photo-description').textContent = photo.description;
  document.getElementById('photo-attribution').replaceChildren(photoAttribution(photo));
  savedPageOverflow = document.documentElement.style.overflow;
  document.documentElement.style.overflow = 'hidden';
  photoDialog.showModal();
}

function createPhotoFigure(key, compact = false) {
  const photo = tripPhotos[key];
  const figure = document.createElement('figure');
  figure.className = compact ? 'destination-photo route-photo' : 'destination-photo day-photo';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'photo-trigger';
  button.setAttribute('aria-label', `放大照片：${photo.title}`);
  button.setAttribute('aria-haspopup', 'dialog');
  button.addEventListener('click', () => openPhoto(key, button));
  const image = document.createElement('img');
  image.src = photo.src;
  image.alt = photo.alt;
  image.width = photo.width || 1000;
  image.height = photo.height || 667;
  image.loading = 'lazy';
  image.decoding = 'async';
  button.append(image);
  const caption = document.createElement('figcaption');
  const title = document.createElement('span');
  title.textContent = photo.title;
  const source = document.createElement('a');
  source.href = `#credit-${key}`;
  source.className = 'photo-source';
  source.textContent = '照片來源';
  source.setAttribute('aria-label', `${photo.title}的照片來源與授權`);
  source.addEventListener('click', () => {
    document.getElementById('photo-credits').open = true;
  });
  caption.append(title, source);
  figure.append(button, caption);
  return figure;
}

const routePhotoKeys = ['acropolis', 'delphi', 'meteora', 'portara', 'oia'];
document.querySelectorAll('.route-symbol').forEach((symbol, index) => {
  symbol.replaceWith(createPhotoFigure(routePhotoKeys[index], true));
});

const creditList = document.getElementById('photo-credit-list');
Object.entries(tripPhotos).forEach(([key, photo]) => {
  const item = document.createElement('li');
  item.id = `credit-${key}`;
  item.tabIndex = -1;
  const title = document.createElement('strong');
  title.textContent = photo.title;
  const credit = document.createElement('span');
  credit.append(photoAttribution(photo));
  item.append(title, credit);
  creditList.append(item);
});

document.getElementById('close-photo').addEventListener('click', () => photoDialog.close());
photoDialog.addEventListener('click', event => {
  if (event.target !== photoDialog) return;
  const bounds = photoDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) photoDialog.close();
});
photoDialog.addEventListener('close', () => {
  document.documentElement.style.overflow = savedPageOverflow;
  photoOpener?.focus({ preventScroll: true });
});
