# Generated by Django 2.1.5 on 2019-02-06 18:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Codelines',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Snippets',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('snippet', models.CharField(max_length=255)),
                ('codelines', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='codelines', to='main.Codelines')),
            ],
        ),
    ]
