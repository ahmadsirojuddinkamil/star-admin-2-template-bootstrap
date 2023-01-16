<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            ['name' => $name = 'Laravel', 'Slug' => str($name)->slug()],
            ['name' => $name = 'PHP', 'Slug' => str($name)->slug()],
            ['name' => $name = 'Javascript', 'Slug' => str($name)->slug()],
            ['name' => $name = 'React Js', 'Slug' => str($name)->slug()],
            ['name' => $name = 'Vue Js', 'Slug' => str($name)->slug()],
            ['name' => $name = 'Bootstrap Css', 'Slug' => str($name)->slug()],
        ])->each(fn ($q) => Category::create($q));
    }
}
