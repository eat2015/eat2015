from django.http import HttpResponse
from django.http import JsonResponse
from django import template
from django.template.loader import get_template
from django.shortcuts import render_to_response
from django.template.loader import render_to_string
from mysite.models import *
from django.template.context_processors import csrf
import json
def givestore(request):
    c={}
    c.update(csrf(request))
    return reder_to_response("givestore.html", c)

def createlist(request):
	c = {}
	c.update(csrf(request))
	return render_to_response("createlist.html", c)

def searchlist(request):
    c = {}
    c.update(csrf(request))
    return render_to_response("searchlist.html", c)

def search2(request):
	c = {}
	c.update(csrf(request))
	return render_to_response("searchstore.html", c)

def search(request):
    c = {}
    c.update(csrf(request))
    return render_to_response("search.html", c)

def eat(request):
	c = {}
	c.update(csrf(request))
	return render_to_response("index.html", c)

def main(request):
	c = {}
	c.update(csrf(request))
	return render_to_response("main.html", c)

def aboutus(request):
	c = {}
	c.update(csrf(request))
	return render_to_response("aboutus.html", c)

def login(request):
	if request.method == 'POST':
		response_data = {}
		try:
			user = Users.objects.get(username = request.POST.get('accountnumber') , password = request.POST.get('password'))
		except:
			user = None
		if user:
			response_data['exist'] = True
			response = JsonResponse(response_data)
			response.set_cookie('account',request.POST.get('accountnumber'))
		else:
			response_data['exist'] = False
			response = JsonResponse(response_data)
		return response

def register(request):
	if request.method == 'POST':
		response_data = {}
		try:
			user = Users.objects.get(username = request.POST.get('accountnumber'))
		except:
			user = None
		if user:
			response_data['exist'] = True
			response = JsonResponse(response_data)
		else:
			user = Users(username = request.POST.get('accountnumber') , password = request.POST.get('password') , email = request.POST.get('email'))
			user.save()
			response_data['exist'] = False
			response = JsonResponse(response_data)
			response.set_cookie('account',request.POST.get('accountnumber'))
		return response

def checkcookie(request):
	response_data = {}
	if 'account' in request.COOKIES:
		response_data['exist'] = True;
		response_data['account'] = request.COOKIES['account'];
	else:
		response_data['exist'] = False;
	return JsonResponse(response_data)


def alltag(request):
    tags = Tags.objects.all()
    
    # TODO: define a get_tag_details function, if needed.
    result = []
    for tag in tags:
        tag_info = dict()
        tag_info['id'] = tag.id
        tag_info['name'] = tag.name
        tag_info['description'] = tag.description
        result.append(tag_info)
    
    return HttpResponse(json.dumps(result))


def get_store_details(store):
    store_info = dict()
    store_info['id'] = store.id
    store_info['name'] = store.name
    store_info['description'] = store.description
    
    # TODO: store_info['good'] = store.good 
    # TODO: store_info['bad'] = store.bad
    # When like, dislike is updated, we need to update store.good, store.bad
    # in database. With this method, it reduces times of computation. 
    store_info['good'] = len(store.storelike_set.all())
    store_info['bad'] = len(store.storedislike_set.all())
    store_info['address'] = store.location
    store_info['fans_page'] = store.fan_page
    store_info['website'] = store.website
    return store_info


def tag_search_store(request):

    if request.method == 'POST':
        taglist = request.POST.get('taglist')

        # If there is no any tag in search list
        # return all stores
        stores = Stores.objects
        if len(taglist) == 0:
            stores = stores.all()
        else:
            taglist = taglist.split(',')
            for tag_id in taglist:
                tag_store = tag_id.split('：')
                if tag_store[0] == "店名": 
                    stores = stores.filter(name__icontains=tag_store[1])
                else:
                    stores = stores.filter(tags=int(tag_id))
        
        # If there is no any store left, after filtering.
        # return response '' , which represent ZERO LENGTH data.
        if (len(stores)) == 0:
            return HttpResponse('')

        stores_details = []
        for store in stores:
            store_info = get_store_details(store)
            stores_details.append(store_info)
        
        return HttpResponse(json.dumps(stores_details))


def get_list_info(food_list):
    food_list_info = dict()
    food_list_info['id'] = food_list.id
    food_list_info['user'] = food_list.user.username
    food_list_info['name'] = food_list.name
    food_list_info['description'] = food_list.description
    food_list_info['good'] = food_list.like
    food_list_info['bad'] = food_list.dislike
    return food_list_info        


def tag_search_list(request):

    if request.method == 'POST':
        taglist = request.POST.get('taglist')

    lists = Lists.objects
    if len(taglist) == 0:
        lists = lists.all()
    else:
        taglist = taglist.split(',')
        for tag_id in taglist:
            tag_store = tag_id.split('：')
            if tag_store[0] == "店名": 
                store_id = Stores.objects.filter(name__icontains=tag_store[1])
                lists = lists.filter(store=store_id)
            else:
                lists = lists.filter(tags=int(tag_id))
    
    if (len(lists)) == 0:
        return HttpResponse('')

    lists_details = []
    i=0
    for food_list in lists:
        if i==0 :
            list_info = get_list_info(food_list)
            lists_details.append(list_info)
        elif lists[i] != lists[i-1] :
            list_info = get_list_info(food_list)
            lists_details.append(list_info)
        i=i+1

    return HttpResponse(json.dumps(lists_details))

def search_ajax(request):
    if request.method == 'GET':
        taglist = request.GET.get('taglist')
    
    lists = Lists.objects
    stores = Stores.objects
    if len(taglist) == 0:
        lists = lists.all()
        stores = stores.all()
    else:
        taglist = taglist.split(',')
        for tag_id in taglist:
            tag_store = tag_id.split('：')
            if tag_store[0] == "店名": 
                store_id = Stores.objects.filter(name__icontains=tag_store[1])
                lists_a = lists.filter(store=store_id)
                stores = stores.filter(name__icontains=tag_store[1])
            else:
                lists_a = lists.filter(tags=int(tag_id))
                stores = stores.filter(tags=int(tag_id))
    lists = []
    i=0
    for food_list in lists_a:
        if i==0 :
            list_info = get_list_info(food_list)
            lists.append(list_info)
        elif lists_a[i] != lists_a[i-1] :
            list_info = get_list_info(food_list)
            lists.append(list_info)
        i=i+1
    
    return render_to_response('searchvariable.html' , locals())

def search_store(request):
    if request.method == 'GET':
        store_id = request.GET.get('store')
    
        raw_store = Stores.objects.get(id=int(store_id))
        store = get_store_details(raw_store)
        store['has_fans_page'] = True if store['fans_page'] else False
        comments = raw_store.storecomment_set.all()
        
        return render_to_response('searchstore.html', locals())



def search_list_ajax(request):
    if request.method == 'GET':
        list_id = request.GET.get('list')
    
        raw_list = Lists.objects.get(id=int(list_id))
        
        list = get_list_info(raw_list)
        listtags = Tags.objects.filter(list=int(list_id))
        comments = raw_list.listcomment_set.all()
        
        storecomments = raw_list.listsstorecomment_set.all()
        
        return render_to_response('searchlistvariable.html', locals())


def create_food_list(request):
    if request.method == 'POST':
        request_data = json.loads(dict(request.POST)['json'][0])
        user = Users.objects.get(username=request.COOKIES['account'])
        list_name = request_data['listname']
        list_des = request_data['description']
        list_tags = request_data['taglist'].split(',')
        list_tags = list(map(int, list_tags))
        
        # create new food list
        new_list = Lists.objects.create(name=list_name, description=list_des, like=0, dislike=0,
            user=user)
        
        # connect food list and it's tags 
        for tag_id in list_tags:
            tag = Tags.objects.get(id=tag_id)
            new_list.tags_set.add(tag)
        new_list.save()

               
        stores = request_data['customlist']
        
        ID = []
        for store in stores:
            # add store onto list
            store_obj = Stores.objects.get(id=store['id'])
            new_list.store.add(store_obj)
            new_list_store_recommend = ListsStoreComment.objects.create(list=new_list,
                    store=store_obj, dish=store['recommendmeal'], 
                    description=store['description'])
            pics = store['pics']
            for pic in pics:
                new_pic = ListStorePic.objects.create(
                        liststorecomment=new_list_store_recommend,
                        description=pic['description'])
                ID.append(new_pic.id)
        return HttpResponse(json.dumps(ID))


def create_store(request):
    if  request.method == 'POST':
            request_data = json.loads(dict(request.POST)['json'][0])
            
        return HttpResponse('')


def create_pic(request):
    if request.method =='POST':

        return HttpResponse('')
