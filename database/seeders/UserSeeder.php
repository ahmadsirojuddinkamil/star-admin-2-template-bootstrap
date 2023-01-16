<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'name' => 'kamil',
                'email' => 'kamil@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('12345678'),
            ],

            [
                'name' => 'ahmad',
                'email' => 'ahmad@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('87654321'),
            ],
        ])->each(fn ($q) => User::create($q));
    }
}
