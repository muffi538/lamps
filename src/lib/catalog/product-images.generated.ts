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
  "20in1-cleaning-kit": [
    {
      "file": "01-main",
      "src": "/products/20in1-cleaning-kit/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 900,
      "height": 2195,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBv/EACAQAQACAgEEAwAAAAAAAAAAAAECAwAhEQQUQVEjMbH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAwDAQACEQMRAD8A2E6JAlLWReQONHrWRelpksp2MZO09ON1LbKfx3zqDxEH9MO5sNaePKfeBx6KH//Z"
    },
    {
      "file": "02-detail-tool-set",
      "src": "/products/20in1-cleaning-kit/02-detail-tool-set.jpg",
      "role": "detail",
      "description": "tool-set",
      "order": 2,
      "width": 900,
      "height": 963,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMF/8QAIBAAAgICAgIDAAAAAAAAAAAAAQIDEQAEEiETsRSh4f/EABUBAQEAAAAAAAAAAAAAAAAAAAEE/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAwDAQACEQMRAD8A0PiTzb4iZAQSbflV9Xf1lZE0FlcGBgQSKDGveMaLwbDzQ8RJZ7ZbHvBNryOxZpEsmzSfuSuhydS//9k="
    },
    {
      "file": "03-detail-brush",
      "src": "/products/20in1-cleaning-kit/03-detail-brush.jpg",
      "role": "detail",
      "description": "brush",
      "order": 3,
      "width": 541,
      "height": 598,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBv/EAB0QAAEEAwEBAAAAAAAAAAAAAAIBAwQRAAVRExL/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAEAITH/2gAMAwEAAhEDEQA/ANYcvwiR3ibVxx5BoQ6qYs9VAMyMorakS2q1glTHWdi20Pz50KVXcute4GVKPC//2Q=="
    },
    {
      "file": "04-detail-dimensions",
      "src": "/products/20in1-cleaning-kit/04-detail-dimensions.jpg",
      "role": "detail",
      "description": "dimensions",
      "order": 4,
      "width": 699,
      "height": 564,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgAG/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAECETEDITKBof/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDcQtrfKaQlqwrPhR4rodID/9k="
    }
  ],
  "3in1-wireless-charger": [
    {
      "file": "01-main",
      "src": "/products/3in1-wireless-charger/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 705,
      "height": 1005,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwUG/8QAIhAAAgEEAgEFAAAAAAAAAAAAAQIDAAQFEhExExUhQVGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABcRAQEBAQAAAAAAAAAAAAAAAAERAAP/2gAMAwEAAhEDEQA/AJOSu3yl3LcT+UKHdRHtrqOeuq0VplYVtIQbhFIjUEMeSPb5ppMHapPIUGi96KBwDR+nQfR/aJ6CSZTmjd//2Q=="
    }
  ],
  "adjustable-laptop-stand": [
    {
      "file": "01-main",
      "src": "/products/adjustable-laptop-stand/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 900,
      "height": 607,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAb/xAAkEAABAwEIAwEAAAAAAAAAAAABAgMEAAUREhMhMUFRIyRS0f/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACETH/2gAMAwEAAhEDEQA/ADWnImS7YdSlXqx3C8BllN44JPetFNkzbziYQTyc/erhyO7ivffD4B0CmwNOj3QVxFY1eQb/ACf2p7psUqvZ/9k="
    },
    {
      "file": "02-lifestyle-travel-ready",
      "src": "/products/adjustable-laptop-stand/02-lifestyle-travel-ready.jpg",
      "role": "lifestyle",
      "description": "travel-ready",
      "order": 2,
      "width": 900,
      "height": 409,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBf/EACEQAAICAQQCAwAAAAAAAAAAAAECAxEEABIhYQUxFEGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAMAwEAAhEDEQA/ANvIDzI0jMHZGpFvh1IFi+xVdjQLlybBsyo9tcbquu9Plj+N4vFyb3yRoF9Vdjj81WPF4LgPJixs7csxX2fs6I8NJX//2Q=="
    },
    {
      "file": "03-lifestyle-anti-slip",
      "src": "/products/adjustable-laptop-stand/03-lifestyle-anti-slip.jpg",
      "role": "lifestyle",
      "description": "anti-slip",
      "order": 3,
      "width": 896,
      "height": 420,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQME/8QAIhABAAIBAwMFAAAAAAAAAAAAAQIDBAAFERMxcSEyYZGx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwB7fupdHHxo+y6cVPHrx+/WsVe5UxrjGVV6gCxgcPj405k4kMm2DYy4gJwPc1YrgAEQDsGjSj//2Q=="
    },
    {
      "file": "04-lifestyle-viewing-angles",
      "src": "/products/adjustable-laptop-stand/04-lifestyle-viewing-angles.jpg",
      "role": "lifestyle",
      "description": "viewing-angles",
      "order": 4,
      "width": 900,
      "height": 414,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBv/EACEQAAIBAwMFAAAAAAAAAAAAAAECAwAEIRETMRUiI5LR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDWzzQu7KZFAj7iNeTThcwMAd1M55qZrNDNI5eTyHIDaCj022OSje5+0aUf/9k="
    }
  ],
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
  "auto-rotating-3in1-charger": [
    {
      "file": "01-main",
      "src": "/products/auto-rotating-3in1-charger/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 648,
      "height": 640,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUG/8QAJBAAAQIEBQUAAAAAAAAAAAAAAQIDAAQFEQYSEyGxIzFhcYH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJWapPP1Nma1HUhppGXTBF1Eb7ezxG8aqCXWkOCWmQFpCgC3Y7/YErDkitxtZLvTCRbN3CbW4ivbyYD//2Q=="
    },
    {
      "file": "02-lifestyle-pair",
      "src": "/products/auto-rotating-3in1-charger/02-lifestyle-pair.jpg",
      "role": "lifestyle",
      "description": "pair",
      "order": 2,
      "width": 900,
      "height": 514,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBv/EACIQAAIBBAEEAwAAAAAAAAAAAAECAwAEBRESEyExYSIkM//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwBOb6jzZKNWYh5gz7Y9wGOhWsx9xlBj7b6Ef5L5n9D1RbH2DmWV7QM03yfk26ujmHTXimhoaAPig//Z"
    },
    {
      "file": "03-lifestyle-charge-vertically",
      "src": "/products/auto-rotating-3in1-charger/03-lifestyle-charge-vertically.jpg",
      "role": "lifestyle",
      "description": "charge-vertically",
      "order": 3,
      "width": 373,
      "height": 270,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgT/xAAgEAACAQMEAwAAAAAAAAAAAAABAgMABREEBiExMmGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwC6wTTaret4kaVzEgKopY48gOvlLs0A2PO01/1TtwWD5985p9Qj/9k="
    },
    {
      "file": "04-lifestyle-three-devices",
      "src": "/products/auto-rotating-3in1-charger/04-lifestyle-three-devices.jpg",
      "role": "lifestyle",
      "description": "three-devices",
      "order": 4,
      "width": 373,
      "height": 262,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgX/xAAhEAABAwQBBQAAAAAAAAAAAAACAQMRAAQFIRIGMUFRgf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwBNgM0OZtjcRlWTBdjylIWY38qrQzo5q4Bx5hu54sgYkScEUi0up8dvVM6D/9k="
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
  "charcoal-diffuser": [
    {
      "file": "01-main",
      "src": "/products/charcoal-diffuser/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 900,
      "height": 1642,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAiEAEAAQMDBAMAAAAAAAAAAAABAgADBAUREhMhIrEjMaH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGREBAAIDAAAAAAAAAAAAAAAAAgABEiEx/9oADAMBAAIRAxEAPwBV3XMi/KdmOnpYl22V5fnalWdBxpWYSce6LEX5NvVLxdNxZXeR1wXfj1PH1V8iAAAH0UJKvsZoaxqf/9k="
    },
    {
      "file": "02-angle-1",
      "src": "/products/charcoal-diffuser/02-angle-1.jpg",
      "role": "angle",
      "description": "1",
      "order": 2,
      "width": 900,
      "height": 802,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAgEAACAQQBBQAAAAAAAAAAAAABAwIABBESMQUUFUFR/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABgRAAMBAQAAAAAAAAAAAAAAAAABAhES/9oADAMBAAIRAxEAPwAxwUu47ZMJBbIQyADnj1mn1vtlrjDxt0dQBnegraLXdVgZNGDgka/KrhEEcCidsY5nD//Z"
    },
    {
      "file": "03-angle-2",
      "src": "/products/charcoal-diffuser/03-angle-2.jpg",
      "role": "angle",
      "description": "2",
      "order": 3,
      "width": 900,
      "height": 867,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgL/xAAhEAACAQQCAgMAAAAAAAAAAAABAgMABAUREjEhUWGB4f/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACEf/aAAwDAQACEQMRAD8AqXNzY/JtZwRIYYnVNHtut/lKWs4CxJiUkn1RqwxyXGXjmdhonkRx87Hz9UuoKkoumGT/2Q=="
    },
    {
      "file": "04-angle-3",
      "src": "/products/charcoal-diffuser/04-angle-3.jpg",
      "role": "angle",
      "description": "3",
      "order": 4,
      "width": 900,
      "height": 1057,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwT/xAAkEAABAwMBCQAAAAAAAAAAAAABAgMRAAQxEgUUFSEjQVGTof/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwB1XLbLhsEJdUVaepEwc471aW1Tzfa9JqfZjO+vG8U64kiCUSCD8p+OkZtUE+dRowrK0AHL/9k="
    }
  ],
  "circuitra-rotating-charging-dock": [
    {
      "file": "01-main",
      "src": "/products/circuitra-rotating-charging-dock/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 772,
      "height": 852,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgL/xAAhEAABBAEDBQAAAAAAAAAAAAABAAIDEQQFBjESExQVJP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCvfam/d2PH5Pzum6HY4IFCyE8R+PbMY1U5YyOHiSu2L5urSBB//9k="
    },
    {
      "file": "02-packaging",
      "src": "/products/circuitra-rotating-charging-dock/02-packaging.jpg",
      "role": "packaging",
      "description": null,
      "order": 2,
      "width": 592,
      "height": 283,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQG/8QAIhAAAwABAwMFAAAAAAAAAAAAAQIDAAURMQQTIRUiI2HB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDQ21GDyqqNZXhJb1E/BAIJ2y6Q7skovDqGG/3g9OnX1TVlJ9tIJLYDgHx+41L45Ig4VQBhpP/Z"
    }
  ],
  "flame-aromatherapy-diffuser": [
    {
      "file": "01-main",
      "src": "/products/flame-aromatherapy-diffuser/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 783,
      "height": 1138,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQL/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABCEFERNBU3GBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAMAwEAAhEDEQA/ADo7fRm07i4bqO47xYFCwUk49GpSGVo1MM5MZAKE4x0ph0RtPkjUyKoAQgvuDjxuPtFcBXCuQBgCgUnxL//Z"
    },
    {
      "file": "02-colour-glow",
      "src": "/products/flame-aromatherapy-diffuser/02-colour-glow.jpg",
      "role": "colour",
      "description": "glow",
      "order": 2,
      "width": 529,
      "height": 529,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQME/8QAJBAAAgEDAwMFAAAAAAAAAAAAAQIDAAQRBRMhIzEyQUJRYZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwABtPt47KF21CHLEF41BLIDj9xRskT7jdJ+59prS9zDJapGIGWQHz3MjuM8Y+vnioy3Eplc7jeR9aMUlwb/2Q=="
    },
    {
      "file": "03-colour-amber",
      "src": "/products/flame-aromatherapy-diffuser/03-colour-amber.jpg",
      "role": "colour",
      "description": "amber",
      "order": 3,
      "width": 417,
      "height": 529,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBv/EACAQAAICAgEFAQAAAAAAAAAAAAECBBEAAyEFEiIxgVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIRAxEAPwDPTOn6Y+hX19Rjb3Q0yJd8n38yd+4bGADHk8gYSJMfbFCJGZH7aDHZdC/yhf3FcsHbyPs4crNBv//Z"
    },
    {
      "file": "04-colour-blue",
      "src": "/products/flame-aromatherapy-diffuser/04-colour-blue.jpg",
      "role": "colour",
      "description": "blue",
      "order": 4,
      "width": 415,
      "height": 529,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUG/8QAIxAAAQIFAwUAAAAAAAAAAAAAAQQRAAIDEhMhMUEFFBVhcf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAB/9oADAMBAAIRAxEAPwDPeNpjp+QL0pqNfhBN2232JoGkNCpN2toSzCoHafJyzPs7eng8sxtGvEW4QX//2Q=="
    },
    {
      "file": "05-colour-variants",
      "src": "/products/flame-aromatherapy-diffuser/05-colour-variants.jpg",
      "role": "colour",
      "description": "variants",
      "order": 5,
      "width": 900,
      "height": 272,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAP/xAAqEAABAwEECQUAAAAAAAAAAAABAgMRAAQFEiETIjEyUVJTYnGBkdHh8P/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIREkH/2gAMAwEAAhEDEQA/ACFd3NsNCbQClIxCB0zs9YPijM3Ba1soWNFrJB3/AKpTowpgNsmIGaDyxx/H2qZQkEgY8u9XzR2wBiI1ez//2Q=="
    },
    {
      "file": "06-detail-flame",
      "src": "/products/flame-aromatherapy-diffuser/06-detail-flame.jpg",
      "role": "detail",
      "description": "flame",
      "order": 6,
      "width": 443,
      "height": 428,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgQF/8QAIxAAAQIFAwUAAAAAAAAAAAAAAQIEAAMFESESE5EGFCIj0f/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAEf/aAAwDAQACEQMRAD8Amd0168dN1tqW6kiUSpSpqQBbmCabVXRLjtZi97z1aBm+bxpt+pKi5IlnYQk4VaWbkc4hIqVUShKQ9FgLD1j7AMycNQVVLTv/2Q=="
    },
    {
      "file": "07-detail-top-view",
      "src": "/products/flame-aromatherapy-diffuser/07-detail-top-view.jpg",
      "role": "detail",
      "description": "top-view",
      "order": 7,
      "width": 552,
      "height": 413,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAKBAAAQIEAwgDAAAAAAAAAAAAAQIDAAQFEQYSExQVITEyM0HRQnGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAMAwEAAhEDEQA/AKU/hiV3YVSSHG3kG6SpXc+7wNOGKwSTsD35l9xo1Rm3G6UHU21XE9R+PC/KCgxLVQAM8sbedE+4OBLrf//Z"
    },
    {
      "file": "08-detail-remote",
      "src": "/products/flame-aromatherapy-diffuser/08-detail-remote.jpg",
      "role": "detail",
      "description": "remote",
      "order": 8,
      "width": 443,
      "height": 428,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQT/xAAeEAABBAMBAQEAAAAAAAAAAAABAgMEEQASIQVxMf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECESH/2gAMAwEAAhEDEQA/AJD4iIvoPAgSI8chLjmtCyPyvvMGWAFqoUL4McQZLDmzUpQO1kVYV9F9wV5NPLs2dj3Bgtsom8o//9k="
    },
    {
      "file": "09-packaging-in-the-box",
      "src": "/products/flame-aromatherapy-diffuser/09-packaging-in-the-box.jpg",
      "role": "packaging",
      "description": "in-the-box",
      "order": 9,
      "width": 816,
      "height": 1098,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAD/8QAJBAAAgEDAgYDAAAAAAAAAAAAAQIDAAQRBSESFBUiMVEzcdH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAMAwEAAhEDEQA/ACtKmbTDJGggkBILCSJSzb+Bnenp7nTEuJE5Oy7WI+Jff1V1gtEkD2duY4zkqq44h6rF752dmIAJOdgPyhp4/9k="
    }
  ],
  "flame-diffuser": [
    {
      "file": "01-main",
      "src": "/products/flame-diffuser/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 669,
      "height": 1031,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQP/xAAkEAACAQMDAwUAAAAAAAAAAAABAhEAAwQFEyEGEtEUIjFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAYEQACAwAAAAAAAAAAAAAAAAAAAgERUf/aAAwDAQACEQMRAD8ASzcvS3ba37F9rikBVYMeP0fFGemvt7puCeY7x4q2k9Lrj6imQ+SLoRCOw2oniPuimybysV3rhgxMjxRZWhKtp//Z"
    },
    {
      "file": "02-lifestyle-living-room",
      "src": "/products/flame-diffuser/02-lifestyle-living-room.jpg",
      "role": "lifestyle",
      "description": "living-room",
      "order": 2,
      "width": 296,
      "height": 420,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAhEAACAQMDBQAAAAAAAAAAAAABAhEAAyEEBRITMVGR4f/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAWEQEBAQAAAAAAAAAAAAAAAAABADH/2gAMAwEAAhEDEQA/AA3N60LaWyqJf6jHuyQD5zTeUYqLb2uwChLPKmcGKsSDmD7+UZAyUK7f/9k="
    },
    {
      "file": "03-lifestyle-shelf",
      "src": "/products/flame-diffuser/03-lifestyle-shelf.jpg",
      "role": "lifestyle",
      "description": "shelf",
      "order": 3,
      "width": 296,
      "height": 422,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgME/8QAIRAAAQMEAQUAAAAAAAAAAAAAAQIDEQAEBRMUIVFSsdH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGBEBAQADAAAAAAAAAAAAAAAAAQARMTL/2gAMAwEAAhEDEQA/AMK7/HbLUtPrUoEEjWRPXuaDl4NioCok0hg27Z9p0PrUWogECDFW5ivH18ooBqVler//2Q=="
    },
    {
      "file": "04-lifestyle-side-table",
      "src": "/products/flame-diffuser/04-lifestyle-side-table.jpg",
      "role": "lifestyle",
      "description": "side-table",
      "order": 4,
      "width": 296,
      "height": 422,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAfEAACAQQCAwAAAAAAAAAAAAABAgMABAURITESI1L/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGBEAAgMAAAAAAAAAAAAAAAAAAEEBESH/2gAMAwEAAhEDEQA/AAtlLXJXMEEcMqbXbbK88VQTH2PgvoPX0aOLW3tZRJDCqOBoMOxSo9GNTocgUSKQvWf/2Q=="
    },
    {
      "file": "05-lifestyle-bedside",
      "src": "/products/flame-diffuser/05-lifestyle-bedside.jpg",
      "role": "lifestyle",
      "description": "bedside",
      "order": 5,
      "width": 296,
      "height": 424,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQG/8QAIRAAAgAFBAMAAAAAAAAAAAAAAQIAAwUREgQhMWEjMmL/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGREBAAIDAAAAAAAAAAAAAAAAAQAhAhEx/9oADAMBAAIRAxEAPwA/SVedUasJU2VJChTcICL7dmNIuOI8Kpt6g8dQeNMMrhsT8qBFimygc2HJgpiboiVrs//Z"
    }
  ],
  "floating-wireless-charging-lamp": [
    {
      "file": "01-main",
      "src": "/products/floating-wireless-charging-lamp/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 900,
      "height": 1959,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBP/EACQQAAEDAgUFAQAAAAAAAAAAAAECAwQAIQUREiIxBhNBkcHS/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABcRAAMBAAAAAAAAAAAAAAAAAAABETH/2gAMAwEAAhEDEQA/AFgfTiZzC1mQEC3CvlDmGtNOrbMpklBKbk+KwOpkQkuJiyO3usdOZA91KZOI6RnPWbc7v1RpVoqx4f/Z"
    },
    {
      "file": "02-lifestyle-wireless-charging",
      "src": "/products/floating-wireless-charging-lamp/02-lifestyle-wireless-charging.jpg",
      "role": "lifestyle",
      "description": "wireless-charging",
      "order": 2,
      "width": 697,
      "height": 329,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQH/xAAeEAACAgICAwAAAAAAAAAAAAABAgMEABESIQUxYf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQEBAQEAAAAAAAAAAAAAAAABAgAR/9oADAMBAAIRAxEAPwABbE9OxM1WxLCynoo3vQxyv5a81eJnlBYoCSUHZ1gtp1gqcuAcyyMp38OWOWQRrpyBodYV8ZMsCU7/2Q=="
    },
    {
      "file": "03-lifestyle-rotating",
      "src": "/products/floating-wireless-charging-lamp/03-lifestyle-rotating.jpg",
      "role": "lifestyle",
      "description": "rotating",
      "order": 3,
      "width": 674,
      "height": 329,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABf/EAB0QAAICAwADAAAAAAAAAAAAAAECAxEABTEhUbH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAFhEBAQEAAAAAAAAAAAAAAAAAABFx/9oADAMBAAIRAxEAPwBbXa5ZNe8rKtqtA1Z7gzR05Ho47FO0etdBw19wGSYiRvA6cBTdf//Z"
    },
    {
      "file": "04-detail-touch-control",
      "src": "/products/floating-wireless-charging-lamp/04-detail-touch-control.jpg",
      "role": "detail",
      "description": "touch-control",
      "order": 4,
      "width": 684,
      "height": 329,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwX/xAAfEAACAgIDAAMAAAAAAAAAAAABAgMRAAQFEjETYXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACITH/2gAMAwEAAhEDEQA/ADTd6zSyfHccNkn2yPBX7ix8fpzRJK/IuHcBmF+E5K5zvrpBBBK8YZmZiDV9jdGstavBIurCDsOSEUXX1hodjVumT//Z"
    },
    {
      "file": "05-lifestyle-brightness-levels",
      "src": "/products/floating-wireless-charging-lamp/05-lifestyle-brightness-levels.jpg",
      "role": "lifestyle",
      "description": "brightness-levels",
      "order": 5,
      "width": 707,
      "height": 329,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwT/xAAjEAACAQMDBAMAAAAAAAAAAAABAgMAESEFIjEEE1FScYKx/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABURAQEAAAAAAAAAAAAAAAAAAAAh/9oADAMBAAIRAxEAPwAX0Sde5e10KA49uKOTTHikaNl3KSp+RVMGqTyQO7ZLvc/Tj8oj10k5MzYMm4585oVLj//Z"
    }
  ],
  "foldable-5in1-charger-speaker-clock": [
    {
      "file": "01-main",
      "src": "/products/foldable-5in1-charger-speaker-clock/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 504,
      "height": 1495,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQME/8QAJBAAAQIGAQQDAAAAAAAAAAAAAQIDAAQFERIhURMUIzEyYdH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIBAxH/2gAMAwEAAhEDEQA/AC6nUJ+pTzlkvtsKX42Q38eL62Y2CpU9sYF5BKdHZiz0v0S4EuKyBICrnn81BiJlLaEo7KRViLZKYuT9nfuDZCtg65ddP//Z"
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
  "multi-function-charging-dock": [
    {
      "file": "01-main",
      "src": "/products/multi-function-charging-dock/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 900,
      "height": 750,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQH/xAAiEAACAgEEAQUAAAAAAAAAAAABAgMEEQAFEiFxIjFRYYH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGREAAgMBAAAAAAAAAAAAAAAAAAIBAyEi/9oADAMBAAIRAxEAPwAjeJmvPZtMwVI5FVIVGPR2Q3nrUh3u4sMaq9jiFAGM49tK71XEDzzKcliOPQHHJA/R9aJG63sdWCo+FVQB4GNCIrZdH2rYf//Z"
    }
  ],
  "neck-pillow-massager": [
    {
      "file": "01-main",
      "src": "/products/neck-pillow-massager/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 900,
      "height": 817,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAIF/8QAIBAAAgEDBAMAAAAAAAAAAAAAAQIDAAQRBRMhMSJS8f/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIRITH/2gAMAwEAAhEDEQA/AI2o9Nt50tJhLGpDsGHkC2BwevlbSW6xoqNfSFlGCcDmlx28dwjZVQxUENjqn7EfrQhnZGsnGf/Z"
    },
    {
      "file": "02-angle-product",
      "src": "/products/neck-pillow-massager/02-angle-product.jpg",
      "role": "angle",
      "description": "product",
      "order": 2,
      "width": 808,
      "height": 741,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwT/xAAhEAACAQQCAgMAAAAAAAAAAAABAgMABAUREiETMkFRsf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAYEQACAwAAAAAAAAAAAAAAAAAAAREhQf/aAAwDAQACEQMRAD8Amlimx1rAUidw5BLcd9H8plvLRlB8jjY3602bmktsuFRzwKrpPgH7omwkDsXLvtjs96o1CoeH/9k="
    },
    {
      "file": "03-detail-control",
      "src": "/products/neck-pillow-massager/03-detail-control.jpg",
      "role": "detail",
      "description": "control",
      "order": 3,
      "width": 760,
      "height": 690,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwIE/8QAIxAAAQMDAgcAAAAAAAAAAAAAAwECBAARMgUhExQxQWGB0f/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABABEhMf/aAAwDAQACEQMRAD8AshImgxL5Gffpk5fH2mDNmkCx/IZNRcqcmnxzmHJIxHEGlmX3RPVbxidw23JvZO1CtcjBes//2Q=="
    },
    {
      "file": "04-lifestyle-travel-pouch",
      "src": "/products/neck-pillow-massager/04-lifestyle-travel-pouch.jpg",
      "role": "lifestyle",
      "description": "travel-pouch",
      "order": 4,
      "width": 808,
      "height": 699,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIDBP/EACUQAAIBAwMCBwAAAAAAAAAAAAECAwAEEQUTIQYxEhQiMkFRgf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIRITH/2gAMAwEAAhEDEQA/AGeGexsEXfaQnHIkOf36FXj1G5WNRvNwAOeTQ1RVub+8QqI2jA9a92HfB+K1RdP+KJD5thlQfYKEQNxWueT/2Q=="
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
  ],
  "wooden-alarm-clock-pen-holder": [
    {
      "file": "01-main",
      "src": "/products/wooden-alarm-clock-pen-holder/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 873,
      "height": 863,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAIF/8QAIBAAAgEEAQUAAAAAAAAAAAAAAQIEAAMRIRIiMUFRkf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQACUf/aAAwDAQACEQMRAD8A25kgyOFoYAY5DeRx2NVSXmKKSq5I9ml3otsWTcIy4XOd9/tHESG4DGPs7PWanDfZ1zf/2Q=="
    },
    {
      "file": "02-angle-1",
      "src": "/products/wooden-alarm-clock-pen-holder/02-angle-1.jpg",
      "role": "angle",
      "description": "1",
      "order": 2,
      "width": 390,
      "height": 413,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAeEAABAwUBAQAAAAAAAAAAAAABAgMEABESIUET0f/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAaEQEAAQUAAAAAAAAAAAAAAAABAAIREiFB/9oADAMBAAIRAxEAPwCbHhKgRfRbSg4Rq4O6MqXiogtquDbv2rr7YRKASdDICjFpi5yYbJ6SDuhFfUjcNWJ//9k="
    },
    {
      "file": "03-angle-2",
      "src": "/products/wooden-alarm-clock-pen-holder/03-angle-2.jpg",
      "role": "angle",
      "description": "2",
      "order": 3,
      "width": 390,
      "height": 436,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUG/8QAIBAAAgEEAQUAAAAAAAAAAAAAAQIDAAQRIRMSIzFBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAYEQADAQEAAAAAAAAAAAAAAAAAAhEBIf/aAAwDAQACEQMRAD8APM0oZ37wRc7yxH2pEjz8jZllGzrrNay9j4ZwgYkIcb96ohhsySWs42Y+SSd0NXgzVvT/2Q=="
    },
    {
      "file": "04-angle-3",
      "src": "/products/wooden-alarm-clock-pen-holder/04-angle-3.jpg",
      "role": "angle",
      "description": "3",
      "order": 4,
      "width": 390,
      "height": 407,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQIG/8QAIBAAAgIBAwUAAAAAAAAAAAAAAQIAAxESFEEEBSIxUv/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQEBAQEAAAAAAAAAAAAAAAABAgAx/9oADAMBAAIRAxEAPwBK4LSRSqkEtoJLZ4Jhr9h6l3ZkfwY5XJPqaba1M+oqSSeTL21XwIBC9zUy7//Z"
    }
  ],
  "wooden-digital-alarm-clock": [
    {
      "file": "01-main",
      "src": "/products/wooden-digital-alarm-clock/01-main.jpg",
      "role": "main",
      "description": null,
      "order": 1,
      "width": 900,
      "height": 716,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAgEAACAQMEAwAAAAAAAAAAAAABAgMAESEEBTGREyRh/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABcRAAMBAAAAAAAAAAAAAAAAAAABAhH/2gAMAwEAAhEDEQA/ALUkuoHE1+qA3lZi2Mm/FWptBG2VJU/KAdpa59yToUTKFKpP/9k="
    }
  ]
};

export const IMAGE_ROLES: ImageRole[] = ["main","angle","detail","colour","lifestyle","packaging"];
