# Destructuration

    todoObject = { id: 1, label: 'texte de la todo", done: true }

La syntaxe de destructuration 

    { ...todoObject }

quand je l'utilise sur un composant, va me permettre de créer autant de props qu'il y a de propriétés dans l'objet

    <Task key={todoObject.id} id={1} label='texte de la todo' done={true}>

# Generate ID

    npm install uuid


# Programmation déclarative

La programmation déclarative repose sur 2 principes, relativement simples, qui ne varient JAMAIS.

1. Les datas (données) controlent le comportement
2. Les fonctions ne modifient JAMAIS les données (elles renvoient plutôt de nouvelles données)


### Pourquoi suivre ces règles

### Point N° 1 -> Les données contrôlent le comportement

Cela permet de s'assurer d'avoir un comportement toujours prévisible. Si j'exécute plusieurs fois une même fonction avec les mêmes paramètres (ou données) alors je sais avec certitude que j'obtiendrais toujours le même résultat.


```javascript

// Fonction qui respecte la règle N° 1
const multiply = (num1, num2) => num1 * num2
// Cette fonction, si je lui donne num1 (3) et num2 (4) me renverra toujours 12


// Exemple de fonction qui ne respecte pas le principe de la règle numéro 1
const index = 0;

const multiply = (num1, num2) => {
  const total = num1 * num2 * index;
  index++;
  return total;
};
// Cette fonction, si je lui donne num1 (3) et num2 (4) me renverra toujours 12

```

### Point N°2 -> Les fonctions ne modifient jamais les données (originales)
C'est du READ-Only...

Là également, le but de cette règle est de s'assurer un comportement 100% prévisible. Je sais que si j'obtiens des résultats en donnant des données à une fonction, les données originelles existent toujours, et le résultat existe "à part", je ne remplace ou n'écrase rien, je ne fais que renvoyer de nouvelles données.

```javascript
// bon exemple
const liste = [1, 2, 3, 4];

const resultat = liste.map((number) => number * 2 );
// resultat -> [2, 4, 6, 8];
// MAIS je n'ai pas modifié le contenu de liste !!!
// liste est toujours accessible et contient toujours
// les mêmes données


// Pas biiieeeen

for (i=0; i < liste.length; i++){
  // Ici j'écrase, index après index, chaque élément
  // de mon tableau original
  liste[i] = liste[i] * 2;
}


```

### Assignation par copie, et assignation par référence

![image](https://user-images.githubusercontent.com/104289891/191297902-ec54ad2d-3246-4732-86e7-a89d8e2b0198.png)



### Exemple 1

!!!!!!!!! IMPORTAAAAAAAAAAANNNNNNTTTTTT!!!!!!!!

Pour éviter des erreurs quasiement IMPOSSIBLES à debbuger
IL est STRICTEMENT INTERDIT de modifier des infos du state directement. 
Quand on le modifiera, on le fera TOUJOURSavec de nouveaux objets / tableaux.
JE commence par fabriquer un nouvel objet qui représente ma nouvelle todo.


Si je traduis la ligne ci dessous en francais je dis:
modifie le state (setState), dans la propriété "todos" ({todos: ///})
je veux désormais un nouveau tableau (todos: [...])
qui contient tout ce que contenait l'original (todos: [...original])
et j'y rajoute la todo nouvellement crée [newTodo, ...todos]


    const [currentState, UpdateState] =useState(
    {
    todos: data,
    formText:'',

    });

<br>

    const handleSubmit =() =>{

    const newTodo = {
    id: uuidv4(),
    label: formText,
    done:false,
    }

    UpdateState(
    {...currentState,
      todos:[newTodo, ...todos]
    }
    )

    }


### Exemple 2

    const handleCheckTodo = (idclique) => {
    
    
    const newTodos = todos.map((todoObject)=>{
      if (todoObject.id === idclique) {
        return {
          ...todoObject,
          done: !todoObject.done,
        };
      }
    
      return todoObject;
    
    })
    
      UpdateState(
        {...currentState,
          todos: newTodos
        }
      )
    
    
    }