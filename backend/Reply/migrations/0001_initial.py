<<<<<<< HEAD
# Generated by Django 4.1.1 on 2022-09-22 21:27
=======
# Generated by Django 4.1.1 on 2022-09-22 20:54
>>>>>>> 4711dffd80c39e780a3db9962fb7a6090c9fe6bc

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
<<<<<<< HEAD
        ('comment', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
=======
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('comment', '0001_initial'),
>>>>>>> 4711dffd80c39e780a3db9962fb7a6090c9fe6bc
    ]

    operations = [
        migrations.CreateModel(
            name='Reply',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=500)),
                ('comment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='comment.comment')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
