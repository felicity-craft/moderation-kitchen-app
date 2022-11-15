/**
 * Represents a blog post for a recipe.
 */
export interface Recipe {
  title: string;
  intro: string;
  body: string;
  prepTime: string;
  cookTime: string;
  quantitySizeMade: string;
  ingredients: string[];
  method: string[];
  tags: string[];
}
