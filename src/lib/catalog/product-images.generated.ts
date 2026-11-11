// GENERATED FILE — do not edit by hand.
// Run `npm run images:manifest` (it also runs on dev and build).
// Source of truth: public/products/<product-handle>/
//
// Naming: <NN>-<role>[-<description>].<ext>
// Roles:  main | angle | detail | colour | lifestyle | packaging

export type ImageRole = 'main' | 'angle' | 'detail' | 'colour' | 'lifestyle' | 'packaging';

export type GeneratedImage = {
  /** Filename without extension — the key used in a product's `imageDetails`. */
  file: string;
  src: string;
  role: ImageRole;
  description: string | null;
  order: number;
  width: number;
  height: number;
  blurDataURL: string;
};

/** Keyed by product handle. A product's gallery is exactly its own folder. */
export const productImages: Record<string, GeneratedImage[]> = {
  "anti-gravity-diffuser": [
    {
      "file": "01-main",
      "src": "/products/anti-gravity-diffuser/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 1199,
      "height": 1312,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMF/8QAJBAAAgEDAwMFAAAAAAAAAAAAAQIDAAQRBSFREhMVIiNBYXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAESMf/aAAwDAQACEQMRAD8AnYacj29yxhaRIiV7gbGPwfPNL8nfx+gT2pC7AsBk452oVlPNEsoR/bYFimPqtmHSbRoIy8fUxUEnk4oM0ObnT//Z"
    },
    {
      "file": "02-lifestyle-glow",
      "src": "/products/anti-gravity-diffuser/02-lifestyle-glow.jpg",
      "role": "lifestyle",
      "description": "glow",
      "order": 2,
      "width": 1083,
      "height": 1452,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAgT/xAAjEAACAQQBAwUAAAAAAAAAAAABAhEAAwQhBRITIjEzkbHR/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAAkH/2gAMAwEAAhEDEQA/AI8HDsschbuLcftq5RiY6iI1EfVTBNe2/wAU159+slLJHmW8nkyfXcU15m4qAdpdCNx+ULQ8m5S//9k="
    },
    {
      "file": "03-lifestyle-bedside",
      "src": "/products/anti-gravity-diffuser/03-lifestyle-bedside.jpg",
      "role": "lifestyle",
      "description": "bedside",
      "order": 3,
      "width": 1199,
      "height": 1312,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAgEAABBAIDAAMAAAAAAAAAAAABAgMREgAEBSExUmGB/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABgRAAMBAQAAAAAAAAAAAAAAAAABAhEx/9oADAMBAAIRAxEAPwAfHsJUNxR1l0aClAQREEQPz3KCdh4pBS0giOjAydq8g66+9cA3tb76jHpUKiLefLAWk+j50//Z"
    }
  ],
  "bird-diffuser": [
    {
      "file": "01-main",
      "src": "/products/bird-diffuser/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABf/EACAQAAIBBAIDAQAAAAAAAAAAAAECAwAEERIGIQUigUH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABoRAAICAwAAAAAAAAAAAAAAAAASASEiMWH/2gAMAwEAAhEDEQA/AG05Ssl35CEWxItWCDvtjtrmn4JTJBG7DBZQSPlCrxaFJ72ZLlw124c+oOvtn7TcUQjiRMk6qBk/tGWatFMV6f/Z"
    },
    {
      "file": "02-colour-amber",
      "src": "/products/bird-diffuser/02-colour-amber.jpg",
      "role": "colour",
      "description": "amber",
      "order": 2,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQP/xAAfEAEAAgEEAwEAAAAAAAAAAAABAgMABBESMRMhcZL/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQACIf/aAAwDAQACEQMRAD8ATtvrjxpB5W8kQ6BcBs0UfJLYO3txOWphOVdviRhyiBL0/fWQdbSrvo4fpwOuzgL/2Q=="
    },
    {
      "file": "03-colour-black",
      "src": "/products/bird-diffuser/03-colour-black.jpg",
      "role": "colour",
      "description": "black",
      "order": 3,
      "width": 1199,
      "height": 1312,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAfEAACAgICAwEAAAAAAAAAAAABAgMEABESFCEiMVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACEf/aAAwDAQACEQMRAD8AFeu9W+9MpyMnHZOVIlpGJC9llYqNgL8OTBWF+/HblYjjr0A+6P7jXlrB2HSi8HCXDDI2ok//2Q=="
    },
    {
      "file": "04-lifestyle-window",
      "src": "/products/bird-diffuser/04-lifestyle-window.jpg",
      "role": "lifestyle",
      "description": "window",
      "order": 4,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwT/xAAgEAABBAIBBQAAAAAAAAAAAAABAgMEEQAhEiQxUZKx/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAwDAQACEQMRAD8AaeUtEtt6BQBodqNnDbgrU2lRlMAkA0Xd/MoLjEhSCGCjjeudhV+bG8oESNQ6Zn0wE/AC/9k="
    },
    {
      "file": "05-lifestyle-shelf",
      "src": "/products/bird-diffuser/05-lifestyle-shelf.jpg",
      "role": "lifestyle",
      "description": "shelf",
      "order": 5,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAEF/8QAIRAAAgICAgEFAAAAAAAAAAAAAQIDEQAhBAUSEzFRocH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQARIf/aAAwDAQACEQMRAD8AFykCJPEqkAKGoewrf7mrBx+ueCNm7GFWKgkWNawLN6coY+TUpFEij9ZR2cKijwYTWr+cPbyJUBk//9k="
    },
    {
      "file": "06-lifestyle-pair",
      "src": "/products/bird-diffuser/06-lifestyle-pair.jpg",
      "role": "lifestyle",
      "description": "pair",
      "order": 6,
      "width": 1295,
      "height": 1214,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQMG/8QAIRAAAgEDAwUAAAAAAAAAAAAAAQIDABEhBBJRFBUxcaH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGBEBAAMBAAAAAAAAAAAAAAAAAgABESH/2gAMAwEAAhEDEQA/ACY2j6kxBW3aawPvcKZVIgoDaeIkDJLG5rKrrZCZnQBC5u1vJzzV+8y2zDCTyQc/aIyrzI0oVXZ//9k="
    }
  ],
  "candlelight-style-electric-diffuser": [
    {
      "file": "01-main",
      "src": "/products/candlelight-style-electric-diffuser/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBv/EACIQAAEEAgEEAwAAAAAAAAAAAAECAwQRACFBBhIUMVFy4f/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwBst0qdUW3EdqjRSo7O/QwvFPESxwd7zOyn25EhmUhpTamlWEhVgm7+MsPUki9tC/t+YYl//9k="
    },
    {
      "file": "02-lifestyle-bedside",
      "src": "/products/candlelight-style-electric-diffuser/02-lifestyle-bedside.jpg",
      "role": "lifestyle",
      "description": "bedside",
      "order": 2,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgIE/8QAIxAAAgEDAwQDAAAAAAAAAAAAAQIRAAMhBAUSFBVBYWNx4f/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAXEQEBAQEAAAAAAAAAAAAAAAACAQAD/9oADAMBAAIRAxEAPwDBtnJdVdi1gOqwREAHGPdJe5WhhtTbDeRxbBoC+4v1KX3QM1syMkT91Z3gEydOZPyflDXOrMjM3//Z"
    },
    {
      "file": "03-detail-mist",
      "src": "/products/candlelight-style-electric-diffuser/03-detail-mist.jpg",
      "role": "detail",
      "description": "mist",
      "order": 3,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIDBf/EACMQAAEDAwIHAAAAAAAAAAAAAAIBAxEABCEiMQUSFDJBUWL/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQACIf/aAAwDAQACEQMRAD8AnecTZtjfYNt3m0zpic+J3pBdtyFCRwYVJytEmOrt3rp0kVxr57pSM1lG4SmS439JQzQ8JjlL/9k="
    },
    {
      "file": "04-detail-control",
      "src": "/products/candlelight-style-electric-diffuser/04-detail-control.jpg",
      "role": "detail",
      "description": "control",
      "order": 4,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQG/8QAHhAAAgICAgMAAAAAAAAAAAAAAQIDBAASEXEGQeH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACMQP/2gAMAwEAAhEDEQA/ABIvILtmFK0jgRqfSg5St+RFCAg6jjnX7meqsRIO8RZzse8M51MIjezrP//Z"
    },
    {
      "file": "05-detail-base",
      "src": "/products/candlelight-style-electric-diffuser/05-detail-base.jpg",
      "role": "detail",
      "description": "base",
      "order": 5,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAjEAACAgEEAAcAAAAAAAAAAAABAgMRBAAFEkEGEyEiMlFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABYRAQEBAAAAAAAAAAAAAAAAABEAAf/aAAwDAQACEQMRAD8AP3bfJV3CoHkRYHK8AaDEdn71TY2R52NFKYmBdA1Dqxeicvw/Dl7ich5OKsQXRV+R/b9L1Qr7VCqKAFADrQ6TYt//2Q=="
    }
  ],
  "h2o-led-humidifier": [
    {
      "file": "01-main",
      "src": "/products/h2o-led-humidifier/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 1199,
      "height": 1312,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwEG/8QAHRAAAgIDAAMAAAAAAAAAAAAAAQIDEQAEElFh4f/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFxEBAQEBAAAAAAAAAAAAAAAAAgAhMf/aAAwDAQACEQMRAD8Az0TqEkilZgZOTXN9UfuSXb1kldVS1DEAtGLr3g6a87sBBrkisefaBnkJhjJLGzQ84HqqHl//2Q=="
    },
    {
      "file": "02-angle-studio",
      "src": "/products/h2o-led-humidifier/02-angle-studio.jpg",
      "role": "angle",
      "description": "studio",
      "order": 2,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAfEAACAQQCAwAAAAAAAAAAAAABAgUAAwQRBhIjMTL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AeluQPgT2PgCyrC4EIYtr6bRqhoOS45bkJzGkmyWQ2evjCg76nfunKD//2Q=="
    },
    {
      "file": "03-detail-port",
      "src": "/products/h2o-led-humidifier/03-detail-port.jpg",
      "role": "detail",
      "description": "port",
      "order": 3,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgT/xAAhEAABAgYCAwAAAAAAAAAAAAABERIAAwQFBiECExRBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC6/ZFW0N/5Ucoy2BjSShCjevcMYDZHavJy2Rz7m9zFDVRNfYcwH//Z"
    },
    {
      "file": "04-detail-top",
      "src": "/products/h2o-led-humidifier/04-detail-top.jpg",
      "role": "detail",
      "description": "top",
      "order": 4,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwUG/8QAJBAAAgAFAQkAAAAAAAAAAAAAAQIAAwQRIQYFEhM0UWFzgbH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIRAxEAPwC1tHVUikrZ8klA9OxG4wJL9bEYHuNFKcTZKTFwHUML94KdTMV1JX4F+IbEgG2IU6Lkqfxr8irC/9k="
    },
    {
      "file": "05-colour-white",
      "src": "/products/h2o-led-humidifier/05-colour-white.jpg",
      "role": "colour",
      "description": "white",
      "order": 5,
      "width": 890,
      "height": 840,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABf/EACIQAAEDAgYDAAAAAAAAAAAAAAECAxEABAUTFCFRcRKRwf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAYEQADAQEAAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8AcweyOlfVcKl1O0IXI5+ChzbgknLXv3TCcVKbdzJYSjyTMEyB6ijNZy3J7oW88UQpO2n/2Q=="
    },
    {
      "file": "06-colour-pink-lifestyle",
      "src": "/products/h2o-led-humidifier/06-colour-pink-lifestyle.jpg",
      "role": "colour",
      "description": "pink-lifestyle",
      "order": 6,
      "width": 900,
      "height": 693,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBv/EACQQAAIABQEJAAAAAAAAAAAAAAECAAQFETETAxIVISJUcaLh/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABgRAQEAAwAAAAAAAAAAAAAAAAEAAiIx/9oADAMBAAIRAxEAPwDQUjV0CdsjKGFluc8swFnLqOo4iOWqDyyhgpZb33WbHiHcRTt/f5BHJAk6nb//2Q=="
    },
    {
      "file": "07-colour-ways",
      "src": "/products/h2o-led-humidifier/07-colour-ways.jpg",
      "role": "colour",
      "description": "ways",
      "order": 7,
      "width": 900,
      "height": 524,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQME/8QAIBAAAgEEAwADAAAAAAAAAAAAAQIDAAQRIQUSMRNBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGBEBAQADAAAAAAAAAAAAAAAAAQACETH/2gAMAwEAAhEDEQA/AGb3px3ArcRRj5BGpJbJ3gnyssELvBG2H2oPh/KY5W2S7tpIpWfoRtVOPqqQr0hRFd8KoA3UynJjDV//2Q=="
    },
    {
      "file": "08-detail-white-crown",
      "src": "/products/h2o-led-humidifier/08-detail-white-crown.jpg",
      "role": "detail",
      "description": "white-crown",
      "order": 8,
      "width": 900,
      "height": 676,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQME/8QAIhAAAQMEAQUBAAAAAAAAAAAAAQIDEQAFEiEGIjFBcYGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABcRAQADAAAAAAAAAAAAAAAAAAABIUH/2gAMAwEAAhEDEQA/AFuN2Rk21SnkZKeBCpJ0me35U3eMkOrCHoTkYkeKVshIaaE6xOvtbVnrV7NGG4f/2Q=="
    }
  ],
  "jellyfish-aroma-diffuser": [
    {
      "file": "01-main",
      "src": "/products/jellyfish-aroma-diffuser/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwIF/8QAIBAAAgICAAcAAAAAAAAAAAAAAQIAAxESBCEiMUFRcf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A2iprorrWix0YDDjBA+84icMrIG27jMR0JqCo2oHsZlKG1HV4gU8f/9k="
    },
    {
      "file": "02-lifestyle-counter",
      "src": "/products/jellyfish-aroma-diffuser/02-lifestyle-counter.jpg",
      "role": "lifestyle",
      "description": "counter",
      "order": 2,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBf/EACIQAAIBBAEEAwAAAAAAAAAAAAEDAgAEEUESEyEjMUNh0f/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQEAAwAAAAAAAAAAAAAAAAAAITFB/9oADAMBAAIRAxEAPwDTK2W8YIVZtYufyRIwO+802PDiPJrQH7Q2TXXi1PLBATjniB6NX9Ne1xP3ihyDU//Z"
    },
    {
      "file": "03-detail-nozzles",
      "src": "/products/jellyfish-aroma-diffuser/03-detail-nozzles.jpg",
      "role": "detail",
      "description": "nozzles",
      "order": 3,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAP/xAAfEAACAQQCAwAAAAAAAAAAAAABAgMABBESBSETM0H/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAwDAQACEQMRAD8ATecoeOuFhSCMxpp5s9M+xwNR9p7STbHDAd0e+mjW4DNbRSSxeuRhkrVlbKgkdkUDmcnBL//Z"
    }
  ],
  "rain-aroma-diffuser": [
    {
      "file": "01-main",
      "src": "/products/rain-aroma-diffuser/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 899,
      "height": 1291,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFBv/EACIQAAIBAgUFAAAAAAAAAAAAAAEDAgASBBEhIjEjQVHB4f/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREAAwADAAAAAAAAAAAAAAAAAAERAhIx/9oADAMBAAIRAxEAPwDYQYtrZFbJzB0yI0zqXNrCyXWjye/yjYYPU0mLhZedlnunZKhcdsefFT3bjFeMP//Z"
    },
    {
      "file": "02-colour-green-glow",
      "src": "/products/rain-aroma-diffuser/02-colour-green-glow.jpg",
      "role": "colour",
      "description": "green-glow",
      "order": 2,
      "width": 900,
      "height": 577,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAhEAABAwQBBQAAAAAAAAAAAAABAgMRAAQFMRIVIVSBkf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARIRL/2gAMAwEAAhEDEQA/AE2bazbIcUSiAZbI3OjU5WRUFEB0gTqKu42FXLaFAGG+PrvTOi4/xWvlTc2ZF0W5/9k="
    },
    {
      "file": "03-colour-blue-glow",
      "src": "/products/rain-aroma-diffuser/03-colour-blue-glow.jpg",
      "role": "colour",
      "description": "blue-glow",
      "order": 3,
      "width": 900,
      "height": 691,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBf/EACMQAAIBAgQHAAAAAAAAAAAAAAECAwAEESExQRITFUJRkqH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAREAIf/aAAwDAQACEQMRAD8A1rR2eJCoLRuCS+OniqRNGABxfaFiitJGhGXL023zp3RrY90ntQowmTtbv//Z"
    },
    {
      "file": "04-colour-violet-glow",
      "src": "/products/rain-aroma-diffuser/04-colour-violet-glow.jpg",
      "role": "colour",
      "description": "violet-glow",
      "order": 4,
      "width": 900,
      "height": 672,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAEF/8QAIhAAAgEDAgcAAAAAAAAAAAAAAQIDAAQRBSESFSNRUmGS/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEiH/2gAMAwEAAhEDEQA/ANyzkaSJGUAxMCSxO47UkXkIGOIbe6mnqrTIhUHp4pXKbXxb6NF1DMjf/9k="
    }
  ],
  "raindrop-aroma-diffuser": [
    {
      "file": "01-main",
      "src": "/products/raindrop-aroma-diffuser/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 1536,
      "height": 1024,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAeEAEBAAICAgMAAAAAAAAAAAABAgMEACERMRRBcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCh3t3U+blu4GtdBp+uOY6MmObPVAnBN7V0ndusmnju6e69ef3jkARIAAdByTR//9k="
    },
    {
      "file": "02-lifestyle-table",
      "src": "/products/raindrop-aroma-diffuser/02-lifestyle-table.jpg",
      "role": "lifestyle",
      "description": "table",
      "order": 2,
      "width": 1536,
      "height": 1024,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQF/8QAIhAAAgEEAQQDAAAAAAAAAAAAAgMBAAQRIRITIjFBUWGh/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABgRAQEAAwAAAAAAAAAAAAAAAAEAAxIx/9oADAMBAAIRAxEAPwA7e3QhToYwxasp7hmPUxqc/dBNiBzzK5uORbnE+6svz6ajCVpZgj2wMz5+a0kXbRQscxoYj8oewBLMby//2Q=="
    },
    {
      "file": "03-lifestyle-bedside",
      "src": "/products/raindrop-aroma-diffuser/03-lifestyle-bedside.jpg",
      "role": "lifestyle",
      "description": "bedside",
      "order": 3,
      "width": 1536,
      "height": 1024,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgQFBv/EACEQAAIBAwQDAQAAAAAAAAAAAAECAwAREgQUITEFMkHh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oADAMBAAIRAxEAPwDP7MbeR5ZcGtcKw9h85ok0mndFYqnIv1SL+SlkhWNlGKriLftVkc4LyehQYhUcv//Z"
    }
  ],
  "wood-grain-aroma-diffuser": [
    {
      "file": "01-main",
      "src": "/products/wood-grain-aroma-diffuser/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 1312,
      "height": 1199,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAgEAACAgEEAwEAAAAAAAAAAAABAgMEABESE0EVMWGx/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABYRAQEBAAAAAAAAAAAAAAAAAAEhAP/aAAwDAQACEQMRAD8AVPYisLPXLDmCF2B+4aIUBEgetYLADUjX3jZa1ffJYaNuRkAYo23UD8yb5ibpEA6BwTXNITf/2Q=="
    },
    {
      "file": "02-colour-walnut",
      "src": "/products/wood-grain-aroma-diffuser/02-colour-walnut.jpg",
      "role": "colour",
      "description": "walnut",
      "order": 2,
      "width": 1254,
      "height": 1254,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQME/8QAIhAAAQMDAwUAAAAAAAAAAAAAAQMEEQACIQUSEyIxMlOS/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABcRAAMBAAAAAAAAAAAAAAAAAAABEUH/2gAMAwEAAhEDEQA/AEH+r2sHCLUp7zdHIQfGaQNue1Rf6M2du0nCl6vKnGZHVBxOM1r2qe4/IokO5h//2Q=="
    },
    {
      "file": "03-lifestyle-interior",
      "src": "/products/wood-grain-aroma-diffuser/03-lifestyle-interior.jpg",
      "role": "lifestyle",
      "description": "interior",
      "order": 3,
      "width": 1312,
      "height": 1199,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAP/xAAgEAACAgICAgMAAAAAAAAAAAABAwIEABEFEiExInGB/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABcRAAMBAAAAAAAAAAAAAAAAAAABIQL/2gAMAwEAAhEDEQA/AEXrUIqK2eGP9R1s5NUuMiqAnVsGQiASAfeIuIW2xXsT7CdcfHroA/Y1gjzbd+EK/RgdUaof/9k="
    },
    {
      "file": "04-lifestyle-mist",
      "src": "/products/wood-grain-aroma-diffuser/04-lifestyle-mist.jpg",
      "role": "lifestyle",
      "description": "mist",
      "order": 4,
      "width": 1536,
      "height": 1024,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQEG/8QAIxAAAgADCAMAAAAAAAAAAAAAAQIAESEDBAUGEhNBYTEywf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwC3y/nCzYJYOFGobigV4h3dY1kh7lGPzJNsZUk+4Rpd+PkPKToFeICKLj//2Q=="
    },
    {
      "file": "05-detail-base",
      "src": "/products/wood-grain-aroma-diffuser/05-detail-base.jpg",
      "role": "detail",
      "description": "base",
      "order": 5,
      "width": 1488,
      "height": 1057,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQIE/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIEAAURAxIhMRMzQpH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABURAQEAAAAAAAAAAAAAAAAAABEA/9oADAMBAAIRAxEAPwC7vcXhS4cdNYnaq+RQBhuu6XKcmirzB05FziySSoTG5B9Y65rcZnPqX9oEqC//2Q=="
    }
  ]
};

export const IMAGE_ROLES: ImageRole[] = ["main","angle","detail","colour","lifestyle","packaging"];
