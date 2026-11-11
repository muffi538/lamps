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
      "width": 638,
      "height": 890,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgL/xAAfEAACAgIBBQAAAAAAAAAAAAABAgMEABESBSExQaH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABcRAAMBAAAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/AFFmFpJLBkmZ4gAREyjQ+bw7J0Cd5GcUq+mJI22J15NddC7cfBHo5DrxdlB7A6ybzR0//9k="
    },
    {
      "file": "02-angle-1",
      "src": "/products/anti-gravity-diffuser/02-angle-1.jpg",
      "role": "angle",
      "description": "1",
      "order": 2,
      "width": 369,
      "height": 396,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgQF/8QAIBAAAgEEAgMBAAAAAAAAAAAAAQIDAAQRIQVREhMiQf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEx/9oADAMBAAIRAxEAPwCKWKE8M9yEAczCMDA+dZ0cZ/KxCd0t5KNTay2caRxxBgy+KbB7zR5rABiPYdHqgHOzo3//2Q=="
    },
    {
      "file": "03-angle-2",
      "src": "/products/anti-gravity-diffuser/03-angle-2.jpg",
      "role": "angle",
      "description": "2",
      "order": 3,
      "width": 369,
      "height": 396,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAiEAACAAUDBQAAAAAAAAAAAAABAgADBBExBRIUEyJTkdH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECEjFB/9oADAMBAAIRAxEAPwAk+dU8U1m9HUvsAN7E2vi8B51T4l9H7FiplSafTlpUViQ6zC7NklbYtCJe3pr2LgQSTrwZBWWn/9k="
    },
    {
      "file": "04-angle-3",
      "src": "/products/anti-gravity-diffuser/04-angle-3.jpg",
      "role": "angle",
      "description": "3",
      "order": 4,
      "width": 369,
      "height": 401,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBf/EACEQAAEDBAIDAQAAAAAAAAAAAAECAwQABREhEhMjQWGx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABkRAQACAwAAAAAAAAAAAAAAAAEAAhIxQf/aAAwDAQACEQMRAD8Az58qQYaZS1tutrX1jGskUhq6PlpB6U7SPZqq+NMRraiI0hfie5c1LzkkYOsfBQxG8w2DyO20/lAqOyPOx2f/2Q=="
    }
  ],
  "bird-diffuser": [
    {
      "file": "01-main",
      "src": "/products/bird-diffuser/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 688,
      "height": 829,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQME/8QAHxAAAgEEAwEBAAAAAAAAAAAAAQIDAAQREgUhMQax/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIREv/aAAwDAQACEQMRAD8ArY/U3l+UxGke0mhIXGBgedmkXksmdma37JJOYTn8rfYcFxvHssMNsGIbcPIdiD5S+1FrqynRgZP/2Q=="
    },
    {
      "file": "02-colour-violet",
      "src": "/products/bird-diffuser/02-colour-violet.jpg",
      "role": "colour",
      "description": "violet",
      "order": 2,
      "width": 516,
      "height": 417,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQT/xAAiEAACAQQABwEAAAAAAAAAAAABAhEAAwQFBhMUISJBUTL/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Aosbm/mbLMw4C9OSqwPYaJn3T9zHx+Y0uoMnt8ojhzAUb3b5DMGlj4lfpmlbsG68qP0aO1jEk/9k="
    },
    {
      "file": "03-colour-amber-violet",
      "src": "/products/bird-diffuser/03-colour-amber-violet.jpg",
      "role": "colour",
      "description": "amber-violet",
      "order": 3,
      "width": 516,
      "height": 422,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFBv/EAB4QAAICAgIDAAAAAAAAAAAAAAEDAhEABSExBBJh/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABcRAQEBAQAAAAAAAAAAAAAAAAEAAhH/2gAMAwEAAhEDEQA/ANDLZKa8rWZEqmPfmub6wrWvDZgeA2QEjRE+8S1iIt3eygSYkMMrHw5dIsk84IrNoMvL/9k="
    },
    {
      "file": "04-colour-black-violet",
      "src": "/products/bird-diffuser/04-colour-black-violet.jpg",
      "role": "colour",
      "description": "black-violet",
      "order": 4,
      "width": 516,
      "height": 312,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAhEAABAwQBBQAAAAAAAAAAAAABAAIEAwUSMREGM2Fxkf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIRIf/aAAwDAQACEQMRAD8AoYlypy51eHTac4wGR52T4Sh3tS9vpFvU17cx2OLmn3pPGTye2PqFcY5Wn//Z"
    },
    {
      "file": "05-detail-lid",
      "src": "/products/bird-diffuser/05-detail-lid.jpg",
      "role": "detail",
      "description": "lid",
      "order": 5,
      "width": 411,
      "height": 373,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABf/EACMQAAIBAwMEAwAAAAAAAAAAAAECAwAEEQUSIRMxM0FhcZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEDEhEhMf/aAAwDAQACEQMRAD8AZutXlcFIpAj9bHrgZ7fdIy6cryuxuJASxJAHFDnSo3vjc7yCW3bcfNNG+OfEv7RJZ6hpK6qf/9k="
    },
    {
      "file": "06-lifestyle-bedside",
      "src": "/products/bird-diffuser/06-lifestyle-bedside.jpg",
      "role": "lifestyle",
      "description": "bedside",
      "order": 6,
      "width": 495,
      "height": 373,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBv/EACQQAAIBAwMDBQAAAAAAAAAAAAEDAgAEEQUhMQYSExVBUpHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABcRAQADAAAAAAAAAAAAAAAAAAABEUH/2gAMAwEAAhEDEQA/ANF1FqL7DQp3NsQGBkYZ5wCcGqChEyZySCZbnalvXRePExK5r94THcDjjaj1F3xX9H9o5Uk//9k="
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
      "width": 854,
      "height": 1245,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EACMQAAECBQMFAAAAAAAAAAAAAAECAwAEESExBRThEhNBUVL/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECETFR/9oADAMBAAIRAxEAPwBlqjTPStglSXlVoQhWfFxnmJRWmzAWQEpz88xo7zyhK945ANBW1oH20qb7ZF/d4JxvBE+n/9k="
    },
    {
      "file": "02-detail",
      "src": "/products/jellyfish-aroma-diffuser/02-detail.jpg",
      "role": "detail",
      "description": null,
      "order": 2,
      "width": 737,
      "height": 934,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgMF/8QAIRAAAgEEAQUBAAAAAAAAAAAAAQIDAAQREmEFEyEiMXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAIRMQH/2gAMAwEAAhEDEQA/ANq+gvNzALFXjPjYSqAeSKOydLiWRgyjIJB9RTWeUra93A31P5xU1EDKGNtHkjPwUTLcEXs0/9k="
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
      "width": 861,
      "height": 1327,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQG/8QAHxABAAEEAgMBAAAAAAAAAAAAAQIAAxEhBBIFFWGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDZS59mNxgPbGlE1+1STggkoo/aA9XxYSkMZbcS6yTO80lb8ZxI24hbcAG5NSX/2Q=="
    },
    {
      "file": "02-packaging-with-unit",
      "src": "/products/raindrop-aroma-diffuser/02-packaging-with-unit.jpg",
      "role": "packaging",
      "description": "with-unit",
      "order": 2,
      "width": 900,
      "height": 833,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMG/8QAIBAAAgICAgIDAAAAAAAAAAAAAQIDEQAEBSETMTJBYf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAMAwEAAhEDEQA/ANPFz+pKGKiRa+3FAm6q8WvJ6bKD50Fi/eRbjtOGUFNdAX6JA/cYNaFVAEaUOviMml//2Q=="
    },
    {
      "file": "03-packaging",
      "src": "/products/raindrop-aroma-diffuser/03-packaging.jpg",
      "role": "packaging",
      "description": null,
      "order": 3,
      "width": 831,
      "height": 1276,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgED/8QAIxAAAQMDAgcAAAAAAAAAAAAAAQIDEQAFEgQhFUFRU1SR0f/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQADAQAAAAAAAAAAAAAAAAAAARFh/9oADAMBAAIRAxEAPwBcm729RIGsakEg78xV4vb/ADGvdHF2nB9wofMqWVHJEjc9K0RZl4CdUJjtD7QrE8P/2Q=="
    }
  ],
  "wood-grain-aroma-diffuser": [
    {
      "file": "01-main",
      "src": "/products/wood-grain-aroma-diffuser/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 900,
      "height": 1097,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQF/8QAIhAAAgEEAQQDAAAAAAAAAAAAAQIEAAMRIQUGEhMxQVFS/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABgRAAMBAQAAAAAAAAAAAAAAAAASQQEC/9oADAMBAAIRAxEAPwB+Y6juw5Xhj21KWjh+/wCfR1W0kuPcRXwR3AHB0aGb07ElyEvXWc3Fxv8AWPWfuqW41GYsX2Tk6o/TQRi0/9k="
    },
    {
      "file": "02-lifestyle-pair",
      "src": "/products/wood-grain-aroma-diffuser/02-lifestyle-pair.jpg",
      "role": "lifestyle",
      "description": "pair",
      "order": 2,
      "width": 1246,
      "height": 768,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAIF/8QAIRAAAgEEAQUBAAAAAAAAAAAAAQIDAAQRITEFBhITQYH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8AXb9alkvZYREvrS3DIvGDgZ/N1rpFMyKdDIB+1Z7etfN3UsrOqqxGsgcU8WjAACZ9USVaM6nD/9k="
    },
    {
      "file": "03-colour-walnut",
      "src": "/products/wood-grain-aroma-diffuser/03-colour-walnut.jpg",
      "role": "colour",
      "description": "walnut",
      "order": 3,
      "width": 900,
      "height": 1138,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQF/8QAJBAAAQMDAgcBAAAAAAAAAAAAAQIDBAARIQVBBhITMTNRkdH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQACEf/aAAwDAQACEQMRAD8ALXNdmNzXG2F9BLKykjObbmt9jU3Fx21qgvBSkgnO9qWbw5CmPh14ErAA5s5t2v7q0QseVX0/tCjP3N//2Q=="
    },
    {
      "file": "04-colour-oak",
      "src": "/products/wood-grain-aroma-diffuser/04-colour-oak.jpg",
      "role": "colour",
      "description": "oak",
      "order": 4,
      "width": 900,
      "height": 1109,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAF/8QAIhAAAQQBAgcAAAAAAAAAAAAAAQACAxEEEnEFExQxUVOC/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABgRAQADAQAAAAAAAAAAAAAAAAIAAREh/9oADAMBAAIRAxEAPwDVy8+bltMbGMBq2uJsHxumjFkI7gfKn8GifOJTK/VeqrNXsndM73PRwVW7EJHmT//Z"
    }
  ]
};

export const IMAGE_ROLES: ImageRole[] = ["main","angle","detail","colour","lifestyle","packaging"];
