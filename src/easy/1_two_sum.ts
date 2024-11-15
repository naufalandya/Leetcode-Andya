export const twoSum = (nums: number[], target: number): number[] => {
    // Melakukan iterasi untuk elemen pertama dari pasangan
    for (let i = 0; i < nums.length; i++) {
        // Melakukan iterasi untuk elemen kedua dari pasangan, mulai dari elemen setelah i
        for (let j = i + 1; j < nums.length; j++) {
            // Mengecek apakah jumlah dua elemen sama dengan target
            if (nums[i] + nums[j] === target) {
                // Jika ditemukan pasangan yang sesuai, kembalikan indeks pasangan tersebut
                return [i, j];
            }
        }
    }
    // Jika tidak ditemukan pasangan, kembalikan array kosong
    return [];
};

// Test case 1: Pasangan ditemukan
console.log(twoSum([0, 4, 3, 0], 0)); // Output: [0, 3]

// Test case 2: Tidak ada pasangan
console.log(twoSum([3, 3], 0)); // Output: []

// Test case 3: Pasangan ditemukan
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

export const twoSumFast = (nums: number[], target: number): number[] => {
    // Membuat hash map kosong untuk menyimpan nilai dan indeksnya
    const map = new Map<number, number>();
    
    // Melakukan iterasi terhadap array nums
    for (let i = 0; i < nums.length; i++) {
        // Menghitung pasangan yang dibutuhkan agar jumlahnya mencapai target
        const complement = target - nums[i];
        
        // Mengecek apakah pasangan tersebut sudah ada di hash map
        if (map.has(complement)) {
            // Jika ya, kembalikan indeks pasangan
            return [map.get(complement)!, i];
        }
        
        // Jika belum, simpan nilai dan indeks saat ini ke dalam hash map
        map.set(nums[i], i);
    }
    
    // Jika tidak ada pasangan yang ditemukan, kembalikan array kosong
    return [];
};

// Contoh penggunaan dan output
console.log(twoSumFast([0, 4, 3, 0], 0)); // Output: [0, 3]
console.log(twoSumFast([3, 3], 0));       // Output: []
console.log(twoSumFast([2, 7, 11, 15], 9)); // Output: [0, 1]
