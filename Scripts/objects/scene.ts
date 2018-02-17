module objects {
  export class Scene extends createjs.Container {
    // Instance Variables

    // Public Properties
    public assetManager;

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super();

      this.assetManager = assetManager;
    }
    // Private Methods

    // Public Methods

    public Start():void {

    }

    public Update():number {
      return 0;
    }

    public Main():void {

    }
  }
}
