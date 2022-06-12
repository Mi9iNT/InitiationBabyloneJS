Arena = function(game) {
    // Appel des variables nécéssaires
    this.game = game;
    var scene = game.scene;

                            /* Lumière */

    // Création de notre lumière principale
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

                            /* Sphère */

    /* // Créons une sphère 
     var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene); */

    /* // Remontons le sur l'axe y de la moitié de sa hauteur
     sphere.position.y = 1; */

                            /* Sol */

    /*  //Ajoutons un sol pour situer la sphere dans l'espace
     var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene); */

    /* // Ajout d'un plan (name = Personnage ; width = largeur du plan x ; depth = Profondeur du plan Y)
     var ground = BABYLON.Mesh.CreateGround(name, width, depth, subdivision, scene); */

                        /* Cube */

    /* // Ajout d'un Cube (version complète)
     var box = BABYLON.Mesh.CreateBox(name, size, scene, updatable, orientation); */

    /* // Version simplifié de l'ajout de cube
    var box = BABYLON.Mesh.CreateBox(name, size, scene); */

                    /* Cylindre */

    /* // Ajout d'un cylindre (Version simplifiée)
     var cylinder = BABYLON.Mesh.CreateCylinder(name, height, diamTop, diamBottom, tesselation, subdivision, scene); */

    /* // Version complète 
    -height ajuste la hauteur du cylindre.
    -diamTop change la largeur du cercle en haut de la colone.
    -diamBottom change la largeur du cercle en bas de la colonne.
    -tesselation, comme  subdivision, ajuste la qualité de l'objet rendu
    var cylinder = BABYLON.Mesh.CreateCylinder(name, height, diamTop, diamBottom, tesselation, subdivision, scene, updatable, orientation); */

                        /* Test de positionnement d'objet */

                     /* Cylindre 1 */
    // var cylinder = BABYLON.Mesh.CreateCylinder(cylinder, 10, 9, 9, 40, 40, scene, true, 0);
    // cylinder.position.z = 8;
    // cylinder.position.y = -6; 

    //                 /* Cube 1 */
    // var box = BABYLON.Mesh.CreateBox(box, 6, scene);
    // box.position.z = 10;
    // box.position.y = -6;
    // box.position.x = -10; 

    //                 /* Cube 2 */
    // var box = BABYLON.Mesh.CreateBox(box, 4, scene);
    // box.position.z = 10;
    // box.position.y = -6;
    // box.position.x = 9;

    //                 /* Cube 3 */
    // var box = BABYLON.Mesh.CreateBox(box, 4, scene);
    // box.position.z = -8;
    // box.position.y = -4;
    // box.position.x = -9;
    
    //                 /* Cube 4 */
    // var box = BABYLON.Mesh.CreateBox(box, 7, scene);
    // box.position.z = -4;
    // box.position.y = -6;
    // box.position.x = 9;

    //                         /* Sol */
    // var ground = BABYLON.Mesh.CreateGround(ground, 50, 50, 1, scene);
    // ground.position.y = -10;
    // ground.position.z = 14;

                          /* Bonne pratique */

    // Ajoutons un sol de 20 par 20
    var ground = BABYLON.Mesh.CreateGround("ground1", 20, 20, 2, scene);
    // Modification de taille(échelle par scalling)
    ground.scaling = new BABYLON.Vector3(2,2,1);
    ground.scaling.z = 2;
    
    // Modification de Metériel de base assigné
    var materialGround = new BABYLON.StandardMaterial("groundTexture", scene);
    
    materialGround.diffuseTexture = new BABYLON.Texture("assets/images/brick_medieval_0068_01_preview.jpg", scene);
    materialGround.diffuseTexture.uScale = 4.0;
    materialGround.diffuseTexture.vScale = 4.0;

    var ground = BABYLON.Mesh.CreateGround("ground1", 20, 20, 2, scene);
    ground.scaling = new BABYLON.Vector3(2,10,3);
    ground.scaling.z = 2;
    ground.material = materialGround;

    // Notre premier cube qui va servir de modèle
    var mainBox = BABYLON.Mesh.CreateBox("box1", 3, scene);

        // Les trois clones
    var mainBox2 = mainBox.clone("box2");
    var mainBox3 = mainBox.clone("box3");
    var mainBox4 = mainBox.clone("box4");

    // SUR TOUS LES AXES Y -> On monte les meshes de la moitié de la hauteur du mesh en question.
    var mainBox = BABYLON.Mesh.CreateBox("box1", 3, scene);
    mainBox.scaling.y = 1;
    mainBox.position = new BABYLON.Vector3(5,((3/2)*mainBox.scaling.y),5);
    mainBox.rotation.y = (Math.PI*45)/180;

    var mainBox2 = mainBox.clone("box2");
    // SUR TOUS LES AXES Y -> On monte les meshes de la moitié de la hauteur du mesh en question.
var mainBox = BABYLON.Mesh.CreateBox("box1", 3, scene);
mainBox.scaling.y = 1;
mainBox.scaling.x = 5;
mainBox.position = new BABYLON.Vector3(5,((3/2)*mainBox.scaling.y),5);
mainBox.rotation.y = (Math.PI*45)/180;

var mainBox2 = mainBox.clone("box2");
mainBox2.scaling.y = 2;
mainBox2.scaling.x = 2;
mainBox2.position = new BABYLON.Vector3(5,((3/2)*mainBox2.scaling.y),-5);

var mainBox3 = mainBox.clone("box3");
mainBox3.scaling.y = 3;
mainBox3.scaling.x = 1;
mainBox3.position = new BABYLON.Vector3(-5,((3/2)*mainBox3.scaling.y),-5);

var mainBox4 = mainBox.clone("box4");
mainBox4.scaling.y = 4;
mainBox4.scaling.x = 3;
mainBox4.position = new BABYLON.Vector3(-5,((3/2)*mainBox4.scaling.y),5);

var cylinder = BABYLON.Mesh.CreateCylinder("cyl1", 20, 5, 5, 20, 4, scene);
cylinder.position.y = 20/2;
    mainBox2.position = new BABYLON.Vector3(5,((3/2)*mainBox2.scaling.y),-5);

    var mainBox3 = mainBox.clone("box3");
    mainBox3.scaling.y = 3;
    mainBox3.position = new BABYLON.Vector3(-5,((3/2)*mainBox3.scaling.y),-5);

    var mainBox4 = mainBox.clone("box4");
    mainBox4.scaling.y = 4;
    mainBox4.position = new BABYLON.Vector3(-5,((3/2)*mainBox4.scaling.y),5);

    var cylinder = BABYLON.Mesh.CreateCylinder("cyl1", 20, 5, 5, 20, 4, scene);
    cylinder.position.y = 20/2;

        // Cylindre -> 20 de hauteur, 5 de diamètre en haut et en bas, 20 de tesselation et 4 de subdivision
    var cylinder = BABYLON.Mesh.CreateCylinder("cyl1", 20, 5, 5, 20, 4, scene);

    

    };

