<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'category_id' => rand(1, 6),
            'name' => $name = str($this->faker->sentence(4))->title(),
            'slug' => str($name)->slug(),
            'price' => rand(1000, 90000),
            'url' => $this->faker->url(),
            'description' => $this->faker->sentence(10),
        ];
    }
}
