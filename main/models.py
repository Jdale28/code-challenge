from django.db import models

class Codelines(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Snippets(models.Model):
    snippets = models.CharField(max_length=255)
    codelines = models.ForeignKey(Codelines, on_delete=models.CASCADE, related_name='snippets')

    def __str__(self):
        return self.snippets