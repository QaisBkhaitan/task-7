let a ="";
const row = ['سبحان الله','الحمد لله'  ,'الله اكبر'  ,' لا اله الا الله'  ];

for (let i = 0; i < row.length; i++) 
{
    a += `
    <div class="row">

            <input type="button" class="btn" value="${row[i]}"></input>
            <p class="counter">0</p>

    </div>
    
    `
}
document.querySelector('.container').innerHTML = a;

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        let counter = e.target.nextElementSibling;
        let count = parseInt(counter.textContent || 0);
        count++;
        counter.textContent = count;
    });
});