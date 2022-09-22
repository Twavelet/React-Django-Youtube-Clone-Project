from django.urls import path
from . import views

urlpatterns = [
    path('', views.reply_list),
    path('<int:pk>/', views.reply_detail)
]