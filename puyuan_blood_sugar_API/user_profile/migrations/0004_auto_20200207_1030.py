# Generated by Django 3.0.3 on 2020-02-07 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0003_profile_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='user_id',
            field=models.IntegerField(blank=True),
        ),
    ]