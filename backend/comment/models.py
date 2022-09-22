from tkinter import CASCADE
from django.db import models
from authentication.models import User
# Create your models here.

class Comment(models.Model):

    user =models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=150)
    text = models.CharField(max_length=500)
    likes = models.IntegerField()
    dislikes = models.IntegerField()


